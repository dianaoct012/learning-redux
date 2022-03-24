import { combineReducers } from "redux";
import productReducer from "./product";
import currentUserReducer from "./currentUser";

export default combineReducers({
    products: productReducer,
    currentUser: currentUserReducer
})