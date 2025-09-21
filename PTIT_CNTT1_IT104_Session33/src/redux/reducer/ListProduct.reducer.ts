import { products } from "../../database/product.data";
import type { ActionType, IProduct } from "../../interfaces/product.interface";

const initialState: IProduct[] = (() => {
  const data = localStorage.getItem("products");
  if (data) {
    try {
      return JSON.parse(data) as IProduct[];
    } catch (e) {
      console.error("Error parsing products from localStorage:", e);
      return [...products];
    }
  } else {
    localStorage.setItem("products", JSON.stringify(products));
    return [...products];
  }
})();

const listProductReducer = (
  state: IProduct[] = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_CART": {
      if (!("payload" in action) || !action.payload) return state;
      const productInCart = state.find((e) => e.id === action.payload?.id);
      let newState: IProduct[];

      if (productInCart) {
        newState = state.map((item) =>
          item.id === action.payload?.id
            ? {
                ...item,
                quantity: item.quantity - (action.payload?.quantity || 0),
              }
            : item
        );
      } else {
        newState = [...state];
      }
      localStorage.setItem("products", JSON.stringify(newState));
      return newState;
    }
    case "DELETE_CART": {
      if (!("payload" in action) || !action.payload) return state;

      const newState = state.map((item) =>
        item.id === action.payload?.id
          ? {
              ...item,
              quantity: item.quantity + (action.payload?.quantity || 0),
            }
          : item
      );
      localStorage.setItem("products", JSON.stringify(newState));
      return newState;
    }

    default:
      break;
  }
  return state;
};

export default listProductReducer;
