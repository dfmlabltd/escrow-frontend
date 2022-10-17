import { utils } from "ethers";

interface IAddress {
  toString(): string;
}

class Address implements IAddress {
  private address: string = "";

  constructor(address: string) {
    this.fromString(address);
  }

  private fromString = (address: string): void => {
    if (!utils.isAddress(address)) {
      throw new Error("invalid address");
    }
    this.address = address;
  };

  toString = (): string => {
    return this.address;
  };
}

const address: IAddress = new Address("ahhahhahhaha")