import { USER_DATA_UPDATED } from "./constants";

const userDataUpdated = (payload: Object): Object => {
  return {
    type: USER_DATA_UPDATED,
    payload: payload,
  };
};

export default userDataUpdated;
