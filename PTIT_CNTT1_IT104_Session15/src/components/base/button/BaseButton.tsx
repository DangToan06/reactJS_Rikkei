import React, { Component } from "react";
import "./base-button.css";

type BaseButtonPropTypes = {
  type?: "primary" | "secondary" | "success" | "danger";
  id?: string;
  className?: string;
  htmlType?: "button" | "reset" | "submit";
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
  onClickBtn?: () => void;
};

export default class BaseButton extends Component<BaseButtonPropTypes> {
  render() {
    return (
      <button
        onClick={this.props.onClickBtn}
        className={`base-button ${
          this.props.type === "primary"
            ? "button-primary"
            : this.props.type === "secondary"
            ? "button-secondary"
            : this.props.type === "danger"
            ? "button-danger"
            : "button-secondary"
        } ${
          this.props.size === "large"
            ? "button-large"
            : this.props.size === "medium"
            ? "button-medium"
            : this.props.size === "small"
            ? "button-small"
            : "button-medium"
        } `}
        type={this.props.htmlType}
      >
        {this.props.children}
      </button>
    );
  }
}
