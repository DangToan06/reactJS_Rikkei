import { Minus, Plus, Trash2 } from "lucide-react";
import React, { Component } from "react";
import { type ProductI } from "../../Data/product.data.ts";
import "./ModalCart.css";

type PropsType = {
  productAtCart: ProductI[];
};

export default class ModalCart extends Component<PropsType> {
  render() {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>

        {this.props.productAtCart.map((e, i) => {
          return (
            <div key={i} className="cart-items">
              <div className="cart-item">
                <div className="product-image">
                  <img src={e.image} alt="" className="image-placeholder" />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{e.name}</h3>
                  <p className="product-price">
                    {e.price.toLocaleString("vi-VN")}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button className="quantity-btn minus-btn">
                    <Minus size={12} />
                  </button>

                  <span className="quantity-display">{e.quantity}</span>

                  <button className="quantity-btn plus-btn">
                    <Plus size={12} />
                  </button>
                </div>

                <button className="remove-btn">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          );
        })}

        <div className="cart-total">
          <div className="total-row">
            <span className="total-label">Tổng tiền:</span>
            <span className="total-amount">0</span>
          </div>
        </div>
      </div>
    );
  }
}
