import { IAddress } from "./address";
import { IEmail } from "./email";
import { IIdentifier } from "./id";
import { IName } from "./name";

export interface IAnonymousUser {
  readonly email?: IEmail;
  readonly address?: IAddress;
}

export interface IUser extends IAnonymousUser {
  readonly id: IIdentifier;
  readonly is_active: boolean;
  readonly first_name?: IName;
  readonly last_name?: IName;
  readonly wallet_addresses?: IAddress[];
}