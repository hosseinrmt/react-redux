import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import chipsReducer from "./chips/chipsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  chips: chipsReducer,
  user: userReducer,
});

export default rootReducer;
