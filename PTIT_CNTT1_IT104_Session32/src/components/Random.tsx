import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Random() {
  const result = useSelector((state) => state.random);
  const dispatch = useDispatch();
  console.log("Result: ", result);

  const handleRandom = () => {
    dispatch({ type: "RANDOM", payload: Math.ceil(Math.random() * 10) });
  };
  return (
    <div>
      <br />
      <h1>Random: {JSON.stringify(result)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
