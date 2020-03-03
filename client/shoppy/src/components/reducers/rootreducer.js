import { combineReducers } from "redux";
import productReducer from "./productReducer";
import postReducer from "./postReducer";
import shoopingBagReducer from "./shoppingBagReducer";

const rootReducer = combineReducers({
  products: productReducer,
  posts: postReducer,
  shoppingBag: shoopingBagReducer
});

export default rootReducer;
