import { RANDOM } from "../constants/type";

type ActionType = {
  type: string;
  payload: number;
};

const randomReducer = (state: number[] = [], action: ActionType) => {
  switch (action.type) {
    case RANDOM:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default randomReducer;
