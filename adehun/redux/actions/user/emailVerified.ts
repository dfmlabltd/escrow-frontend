import { USER_EMAIL_VERIFIED } from "./constants";

const userEmailVerified = (payload: Object): Object => {
  return {
    type: USER_EMAIL_VERIFIED,
    payload: payload,
  };
};

export default userEmailVerified;
