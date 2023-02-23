import { API_ENDPOINT } from "../utils/constants";

import {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

export interface CustomAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers"> {
  headers: AxiosRequestHeaders;
}

const onRequest = (
  config: InternalAxiosRequestConfig
): CustomAxiosRequestConfig => {
  config.baseURL = API_ENDPOINT;
  config.headers = config.headers ?? new AxiosHeaders();
  config.headers.set("Accept", "application/json");
  config.headers.set("Content-Type", "application/json");
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export default function interceptor(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
