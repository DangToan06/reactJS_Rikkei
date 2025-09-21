import React from "react";
import ListCart from "./ListCart";

export default function YourCart() {
  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>
      <div className="panel-body">
        <ListCart></ListCart>
      </div>
    </div>
  );
}
