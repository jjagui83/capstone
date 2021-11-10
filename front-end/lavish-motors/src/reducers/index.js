import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";
import registerUser from "./registerReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,  registerUser,
});