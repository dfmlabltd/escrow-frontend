import { API_ENDPOINT } from "../../utils/constants";

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from "axios";
import { getAccessToken, refreshAccessToken } from "../../utils/token";
import { CustomAxiosRequestConfig } from "../interceptors";

interface CustomRetryAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers"> {
  retry?: boolean;
  headers?: any;
}

const onRequest = (
  config: InternalAxiosRequestConfig
): CustomAxiosRequestConfig => {
  const access_token: string | null = getAccessToken();

  config.baseURL = API_ENDPOINT;
  config.headers = config.headers ?? new AxiosHeaders();
  config.headers.set("Accept", "application/json");
  config.headers.set("Content-Type", "application/json");
  config.headers.set("Authorization", "Bearer " + access_token);

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  const config: CustomRetryAxiosRequestConfig | undefined = error?.config;

  const status_code = error.response?.status ?? 400;

  if (!config || status_code !== 401) {
    return Promise.reject(error);
  }

  if (config?.retry) {
    return Promise.reject(error);
  }

  const access_token: string | boolean = await refreshAccessToken();

  config.retry = true;

  if (typeof access_token == "boolean") {
    return Promise.reject(error);
  }

  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + access_token,
  };

  return axios(config);
};

export default function interceptor(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
