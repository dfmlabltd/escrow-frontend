import userReducer from "./user";
import { combineReducers } from "redux";
import contractsReducer from "./contract";

const reducers = combineReducers({
  user: userReducer,
  contracts: contractsReducer,
});

export default reducers;
