import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const result = useSelector((state) => state.counter);
  //   console.log(result);

  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <div>Counter: {result}</div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
