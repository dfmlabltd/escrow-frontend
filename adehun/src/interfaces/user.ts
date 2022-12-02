export interface IAnonymousUser {
  readonly email?: string;
  readonly address?: string;
}

export interface IUser extends IAnonymousUser {
  readonly id: number;
  readonly is_email_verified: boolean;
  readonly is_active: boolean;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly wallet_addresses?: string[];
}
