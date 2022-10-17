import { utils } from "ethers";
import truncateAddress from "truncate-eth-address";
import assert from "assert";

export interface IIdentifier {
  toNumber(): number;
}

export class Identifier implements IIdentifier {
  private id: number = 0;

  constructor(address: number) {
    this.fromNumber(address);
  }

  private fromNumber = (id: number): void => {
    assert(id > 0, "invalid address");
    this.id = id;
  };

  toNumber = (): number => {
    return this.id;
  };

}
