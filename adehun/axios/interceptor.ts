import { API_ENDPOINT } from "../utils/constants";

import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface CustomAxiosRequestConfig extends Omit<AxiosRequestConfig, "headers"> {
  headers?: any;
}

interface CustomRetryAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers"> {
  _retry?: boolean;
  headers?: any;
}

const onRequest = (config: CustomAxiosRequestConfig): AxiosRequestConfig => {
  config.baseURL = API_ENDPOINT;
  config.headers.common["Accept"] = "application/json";
  config.headers.common["Content-Type"] = "application/json";
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
