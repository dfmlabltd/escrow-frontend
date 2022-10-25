import { API_ENDPOINT } from "../../utils/constants";

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { refreshAccessToken } from "../../utils/helpers";
import { CustomAxiosRequestConfig } from "../interceptors";

interface CustomRetryAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers"> {
  _retry?: boolean;
  headers?: any;
}

const onRequest = (config: CustomAxiosRequestConfig): AxiosRequestConfig => {
  config.baseURL = API_ENDPOINT;
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  const originalRequest: CustomRetryAxiosRequestConfig | undefined =
    error?.config;
  if (
    originalRequest === undefined ||
    error.response?.status !== 403 ||
    originalRequest._retry
  ) {
    return Promise.reject(error);
  }
  originalRequest._retry = true;
  const access_token: string = await refreshAccessToken();
  originalRequest.headers["Authorization"] = "Bearer " + access_token;
  return axios(originalRequest);
};

export default function interceptor(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
