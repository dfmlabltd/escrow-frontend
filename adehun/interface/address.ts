import { utils } from "ethers";
import truncateAddress from "truncate-eth-address";
import assert from "assert";

export interface IAddress {
  toString(): string;
  toTruncatedString(): string;
}

export class Address implements IAddress {
  private address: string = "";

  constructor(address: string, empty: boolean = false) {
    if (!empty) {
      this.fromString(address);
    }
  }

  private fromString = (address: string): void => {
    assert(utils.isAddress(address), "invalid address");
    this.address = address;
  };

  toString = (): string => {
    return utils.getAddress(this.address);
  };

  toTruncatedString = (): string => {
    return truncateAddress(this.address);
  };
}
