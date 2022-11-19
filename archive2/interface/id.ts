import assert from "assert";

export interface IIdentifier {
  toString(): string;
}

export class Identifier implements IIdentifier {
  private id: number = 0;

  constructor(address: number) {
    this.fromNumber(address);
  }

  private fromNumber = (id: number): void => {
    assert(id >= 0, "invalid number");
    this.id = id;
  };

  toString = (): string => {
    return this.id.toString();
  };
}
