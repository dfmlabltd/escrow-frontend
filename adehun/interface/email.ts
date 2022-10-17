import validateEmail from "validator/lib/isEmail";
import assert from "assert";

export interface IEmail {
  toString(): string;
}

export class Email implements IEmail {
  private email: string = "";

  constructor(email: string) {
    this.fromString(email);
  }

  private fromString = (email: string): void => {
    assert(validateEmail(email), "invalid email address")
    this.email = email;
  };

  toString = (): string => {
    return this.email;
  };
}
