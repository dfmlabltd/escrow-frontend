import { USER_INITIALIZED } from "./constants";

const userInitialized = (payload: Object): Object => {
  return {
    type: USER_INITIALIZED,
    payload: payload,
  };
};

export default userInitialized;
