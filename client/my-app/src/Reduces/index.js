import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./Cart";
export default combineReducers({
  auth,
  cart,
});
