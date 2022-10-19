
import { combineReducers } from "redux";
import { tokenReducer, userReducer } from "./reducers";

const reducers = combineReducers({
  user: userReducer,
  token: tokenReducer
});

export default reducers;
