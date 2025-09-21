import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import ListProducts from "./ListProducts";
import YourCart from "./YourCart";

export default function Index() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <ListProducts></ListProducts>
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <YourCart></YourCart>
            <div className="alert alert-success" role="alert" id="notification">
              Add to cart successfully
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
