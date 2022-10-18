import { TOKEN_UPDATED } from "./constants";

const tokenUpdated = (payload: Object): Object => {
  return {
    action: TOKEN_UPDATED,
    payload: payload,
  };
};

export default tokenUpdated;
