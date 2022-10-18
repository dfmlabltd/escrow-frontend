import { USER_LOGGED_OUT } from "./constants";

const userLoggedOut = (payload: Object): Object => {
  return {
    action: USER_LOGGED_OUT,
    payload: payload,
  };
};

export default userLoggedOut;
