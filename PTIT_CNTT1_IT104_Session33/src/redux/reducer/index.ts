import { combineReducers } from "redux";
import listCartReducer from "./ListCart.reducer";
import listProductReducer from "./ListProduct.reducer";

const rootReducer = combineReducers({
  cartReducer: listCartReducer,
  productReducer: listProductReducer,
});

export default rootReducer;
