import userReducer from "./user";
import { combineReducers } from "redux";
import contractWidgetReducer from "./contractWidget";

const reducers = combineReducers({
  user: userReducer,
  contractWidget: contractWidgetReducer,
});

export default reducers;
