import assert from "assert";
import { utils } from "ethers";
import validateEmail from "validator/lib/isEmail";
import validateName from "validator/lib/isAlpha";

export function assertValidEmail(email: string): void {
  assert(validateEmail(email), "invalid email address");
}

export function assertValidEthereumAddress(address: string): void {
  assert(utils.isAddress(address), "invalid address");
}

export function assertValidID(id: number): void {
  assert(id >= 0, "invalid number");
}

export function assertValidName(name: string): void {
  assert(validateName(name), "name should contain only letters");
  const nameLen = name.length;
  assert(nameLen > 0, "name should not be empty");
  assert(nameLen < 12, "name should be lesser than 12 characters");
}
