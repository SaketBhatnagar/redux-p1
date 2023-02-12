import { combineReducers } from "redux";
import changeTheNumber from "./reducers";

const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
