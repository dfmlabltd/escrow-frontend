export const AUTH_ACCESS_TOKEN: string = "auth_access_token";
export const AUTH_REFRESH_TOKEN: string = "auth_refresh_token";
export const TOKEN_REFRESH_INTERVAL: number = 60 * 5 * 1000; // 5 minutes
export const CURRENT_USER_EMAIL: string = "current_user_email";
export const REDIRECT_TO_AFTER: string = "redirect_to_after";
// endpoints
export const API_ENDPOINT: string = "https://api.adehun.com";
export const LOGIN_WITH_EMAIL_ENDPOINT: string = "/user/email/login/";
export const LOGIN_WITH_WALLET_ENDPOINT: string = "/signin/otk/";
export const REFRESH_TOKEN_ENDPOINT: string = "/user/auth/token/refresh/";
export const ACCESS_TOKEN_ENDPOINT: string = "/user/auth/token/";
export const USER_PROFILE_ENDPOINT: string = "/user/profile/";
export const USER_EMAIL_VERIFICATION_ENDPOINT: string = "/user/email/";
export const USER_EMAIL_RESEND_OTK_ENDPOINT: string = "/user/email/otk/";
