import React, { Component } from "react";
import Children_Comp_Bai05 from "./Children_Comp_Bai05";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type StateType = {
  product: Product;
};

export default class Parent_Comp extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Buoi ba roi",
        price: 12000,
        quantity: 6,
      },
    };
  }
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Children_Comp_Bai05 product={this.state.product} />
      </div>
    );
  }
}
