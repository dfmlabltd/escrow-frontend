import { TOKEN_INITIALIZED } from "./constants";

const tokenInitialized = (payload: Object): Object => {
  return {
    type: TOKEN_INITIALIZED,
    payload: payload,
  };
};

export default tokenInitialized;
