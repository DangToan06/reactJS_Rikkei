import { ShoppingCart } from "lucide-react";
import React, { Component } from "react";
import Product from "./Product";
import ModalCart from "./ModalCart";
import { products, type ProductI } from "../../Data/product.data.ts";
import "./Index.css";

type StateType = {
  productAtCart: ProductI[];
  isModalCart: boolean;
};

export default class extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      productAtCart: JSON.parse(localStorage.getItem("Cart") || "[]"),
      isModalCart: false,
    };
  }

  componentDidUpdate(prevState: StateType): void {
    if (prevState.productAtCart !== this.state.productAtCart) {
      localStorage.setItem("Cart", JSON.stringify(this.state.productAtCart));
    }
  }

  render() {
    const addProductToCart = (product: ProductI) => {
      if (this.state.productAtCart.includes(product)) {
        const tmp: ProductI | undefined = this.state.productAtCart.find(
          (e) => e.id === product.id
        );
        if (tmp) {
          tmp.quantity += 1;
          this.setState({
            productAtCart: [...this.state.productAtCart],
          });
        }
      } else {
        this.setState({
          productAtCart: [...this.state.productAtCart, product],
        });
      }
    };

    const clickModal = () => {
      this.setState({ isModalCart: !this.state.isModalCart });
    };

    return (
      <>
        <div className="header">
          <nav className="navbar">
            <div className="container-page">
              <div>Trang chủ</div>
              <div>Danh sách sản phẩm</div>
            </div>
            <div className="container-shop">
              <button onClick={clickModal}>
                <ShoppingCart />
              </button>
              <span>0</span>
            </div>
          </nav>
        </div>
        <h1 className="title">DANH SÁCH SẢN PHẨM</h1>
        <div>
          <Product products={products} addProductToCart={addProductToCart} />
        </div>

        {this.state.isModalCart ? (
          <ModalCart productAtCart={this.state.productAtCart} />
        ) : (
          <></>
        )}
      </>
    );
  }
}
