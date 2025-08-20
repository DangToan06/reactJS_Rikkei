import React, { Component } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type PropTypes = {
  product: Product;
};

export default class Children_Comp extends Component<PropTypes> {
  render() {
    const { id, name, price, quantity } = this.props.product;

    return (
      <div>
        <h2>Children Component</h2>
        <p>ID: {id}</p>
        <p>Product name: {name}</p>
        <p>Price {price.toLocaleString()} VNĐ</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}
