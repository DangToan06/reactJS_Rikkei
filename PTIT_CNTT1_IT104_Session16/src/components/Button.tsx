import React, { Component } from "react";
import "./Button.css";
type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark"
    | "link";
  children: React.ReactNode;
};

export default class Button extends Component<ButtonProps> {
  render() {
    return (
      <button className={`btn ${this.props.variant}`}>
        {this.props.children}
      </button>
    );
  }
}
