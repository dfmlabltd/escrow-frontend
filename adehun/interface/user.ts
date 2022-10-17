import { utils } from 'ethers'

interface IAnonymousUser {
  email?: string;
  address?: string;
}

interface Address {
    
}

interface IUser extends IAnonymousUser {
  id: number;
  is_active: boolean;
  first_name?: string;
  last_name?: string;
  wallet_addresses?: string[];
}

class User implements IUser {
  set id(value: number) {
    this.id = value;
  }
  set is_active(value: boolean) {
    this.is_active = value;
  }
  set first_name(value: string) {
    this.first_name = value;
  }
  set last_name(value: string) {
    this.last_name = value;
  }
  set email(value: string) {
    this.email = value;
  }
  set wallet_addresses(values: string[]) {
    values.map()
    this.wallet_addresses = values;
  }

  const validate_wallet_address = (address: string) => {
    if(utils.isAddress(address)) {}
  }
}
