export const AUTH_ACCESS_TOKEN: string = "auth_access_token";
export const AUTH_REFRESH_TOKEN: string = "auth_refresh_token";
export const TOKEN_REFRESH_INTERVAL: number = 60 * 4.5 * 1000; // 5 minutes
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

export const DEFAULT_SITE_LANGUAGE = "en";
export const CURRENT_SITE_LANGUAGE_KEY = "current_site_language";

export const LOGIN_PAGE: string = "/login";
export const DASHBOARD_PAGE: string = "/dashboard";
export const USER_EMAIL_VERIFICATION_PAGE: string = "/email/verify";
export const EMAIL_CHANGE_PAGE: string = "/email";
export const LOGIN_VERIFY_PAGE: string = "/login/verify";
