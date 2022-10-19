import { API_ENDPOINT } from "../utils/constants";

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { refreshAccessToken } from "../utils/helpers";

interface CustomAxiosRequestConfig extends Omit<AxiosRequestConfig, "headers"> {
  headers?: any;
}

interface CustomRetryAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers"> {
  _retry?: boolean;
  headers?: any;
}

const onRequest = (config: CustomAxiosRequestConfig): AxiosRequestConfig => {
  config.headers.common["Accept"] = "application/json";
  config.headers.common["Content-Type"] = "application/json";
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
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
  originalRequest.headers.common["Authorization"] = "Bearer " + access_token;
  return axios(originalRequest);
};

export function httpClient(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
