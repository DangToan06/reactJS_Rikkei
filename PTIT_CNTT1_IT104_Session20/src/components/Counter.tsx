import React, { useReducer } from "react";

const initialState = 0;

function reducer(state: number, action: { type: unknown }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Số đếm: {count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        style={{ fontSize: "20px", margin: "10px", padding: "10px 20px" }}
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ fontSize: "20px", margin: "10px", padding: "10px 20px" }}
      >
        Giảm
      </button>
    </div>
  );
}
