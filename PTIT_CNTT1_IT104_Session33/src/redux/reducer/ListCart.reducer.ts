import { carts } from "../../database/cart.data";
import type { ActionType, ICart } from "../../interfaces/product.interface";

const initialState: ICart[] = (() => {
  const data = localStorage.getItem("carts");
  if (data) {
    try {
      return JSON.parse(data) as ICart[];
    } catch (e) {
      console.error("Error parsing carts from localStorage:", e);
      return [...carts];
    }
  } else {
    localStorage.setItem("carts", JSON.stringify(carts));
    return [...carts];
  }
})();

const listCartReducer = (state: ICart[] = initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_CART": {
      if (!("payload" in action) || !action.payload) return state;

      const productInCart = state.find((e) => e.id === action.payload?.id);
      let newState: ICart[];

      if (productInCart) {
        newState = state.map((item) =>
          item.id === action.payload?.id
            ? {
                ...item,
                quantity: item.quantity + (action.payload?.quantity || 0),
              }
            : item
        );
      } else {
        newState = [...state, action.payload];
      }

      localStorage.setItem("carts", JSON.stringify(newState));

      return newState;
    }
    case "DELETE_CART": {
      if (!("payload" in action) || !action.payload) return state;

      const newState = state.filter((c) => c.id !== action.payload?.id);
      localStorage.setItem("carts", JSON.stringify(newState));

      return newState;
    }
    default:
      return state;
  }
};

export default listCartReducer;
