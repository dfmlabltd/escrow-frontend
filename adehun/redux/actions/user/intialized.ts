import { USER_INITIALIZED } from "./constants";

const userInitialized = (payload: Object): Object => {
  return {
    action: USER_INITIALIZED,
    payload: payload,
  };
};

export default userInitialized;
