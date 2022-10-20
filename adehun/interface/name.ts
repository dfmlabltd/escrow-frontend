import validateName from "validator/lib/isAlpha";
import assert from "assert";

export interface IName {
  toString(): string;
}

export class Name implements IName {
  private name: string = "";

  constructor(name: string) {
    this.fromString(name);
  }

  private fromString = (name: string): void => {
    assert(validateName(name), "name should contain only letters");
    const nameLen = this.name.length;
    assert(nameLen > 0, "name should not be empty");
    assert(nameLen < 12, "name should be lesser than 12 characters");
    this.name = name;
  };

  toString = (): string => {
    return this.name;
  };
}
