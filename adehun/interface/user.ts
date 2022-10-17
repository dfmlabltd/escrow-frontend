import { IAddress } from "./address";
import { IEmail } from "./email";
import { IIdentifier } from "./id";
import { IName } from "./name";

export interface IAnonymousUser {
  email?: IEmail;
  address?: IAddress;
}

export interface IUser extends IAnonymousUser {
  id: IIdentifier;
  is_active: boolean;
  first_name?: IName;
  last_name?: IName;
  wallet_addresses?: IAddress[];
}

export class User implements IUser {
  set id(value: IIdentifier) {
    this.id = value;
  }
  set is_active(value: boolean) {
    this.is_active = value;
  }
  set first_name(value: IName) {
    this.first_name = value;
  }
  set last_name(value: IName) {
    this.last_name = value;
  }
  set email(value: string) {
    this.email = value;
  }
  set wallet_addresses(values: IAddress[]) {
    this.wallet_addresses = values;
  }
}
