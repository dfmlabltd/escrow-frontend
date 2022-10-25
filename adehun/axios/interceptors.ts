import { API_ENDPOINT } from "../utils/constants";

import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export interface CustomAxiosRequestConfig
  extends Omit<AxiosRequestConfig, "headers"> {
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
  return Promise.reject(error);
};

export default function interceptor(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
