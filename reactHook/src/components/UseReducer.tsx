import React, { useReducer } from "react";

type ActionTypes = {
  type?: "increase" | "decrease";
  payload?: unknown;
};

const initialState = 0;

const reducer = (state: number, action: ActionTypes) => {
  return state;
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = (): void => {
    dispatch({ type: "increase" });
  };

  const handleDecrease = (): void => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
