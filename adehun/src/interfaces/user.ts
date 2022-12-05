export interface IAnonymousUser {
  email?: string;
  address?: string;
}

export interface IUser extends IAnonymousUser {
  id: number;
  is_email_verified: boolean;
  is_active: boolean;
  first_name?: string;
  last_name?: string;
  wallet_addresses?: string[];
  username?: string;
}
