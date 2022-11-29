import userReducer from "./user";
import { combineReducers } from "redux";
import contractWidgetReducer from "./contractWidget";
import contractsReducer from "./contract";

const reducers = combineReducers({
  user: userReducer,
  contractWidget: contractWidgetReducer,
  contracts: contractsReducer,
});

export default reducers;
