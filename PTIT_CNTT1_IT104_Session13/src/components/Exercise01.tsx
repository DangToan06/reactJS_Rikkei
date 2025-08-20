import React, { Component } from "react";

type StateType = {
  name: string;
};

export default class Exercise01 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Dang Quoc Toan",
    };
  }

  render() {
    return (
      <>
        <h1>Ho va ten: {this.state.name}</h1>
      </>
    );
  }
}
