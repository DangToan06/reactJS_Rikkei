import React, { Component } from "react";
import "./Product.css";
import { ShoppingCart } from "lucide-react";
import { type ProductI } from "../../Data/product.data.ts";

type PropsType = {
  products: ProductI[];
  addProductToCart: (obj: ProductI) => void;
};

export default class Product extends Component<PropsType> {
  render() {
    return (
      <div className="container">
        {this.props.products.map((p, i) => {
          return (
            <div key={i} className="container-product">
              <div className="image">
                <img src={p.image} alt="photo" />
              </div>
              <div className="content">
                <div className="title-product">{p.name}</div>
                <div className="price">{p.price.toLocaleString("vi-VN")} đ</div>
                <div>
                  <button
                    className="btn-add"
                    onClick={() => this.props.addProductToCart(p)}
                  >
                    <ShoppingCart />
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
