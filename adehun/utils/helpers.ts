import axios from "axios";
import {
  AUTH_ACCESS_TOKEN,
  AUTH_REFRESH_TOKEN,
  REFRESH_TOKEN_ENDPOINT,
} from "./constants";

export function getAccessToken(): string | null {
  return localStorage.getItem(AUTH_ACCESS_TOKEN);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(AUTH_REFRESH_TOKEN);
}

export function setAccessToken(token: string): void {
  localStorage.setItem(AUTH_ACCESS_TOKEN, token);
}

export function setRefreshToken(token: string): void {
  localStorage.setItem(AUTH_REFRESH_TOKEN, token);
}

export async function refreshAccessToken(): Promise<string> {
  const { data } = await axios.post(REFRESH_TOKEN_ENDPOINT, {
    refresh: getRefreshToken(),
  });
  setAccessToken(data.access_token);
  return data.access_token
}