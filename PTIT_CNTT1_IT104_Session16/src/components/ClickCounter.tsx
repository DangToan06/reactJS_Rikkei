import React, { Component } from "react";

type StateCount = {
  count: number;
};

export default class ClickCounter extends Component<object, StateCount> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <div>Click: {this.state.count}</div>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Button Click
        </button>
      </div>
    );
  }
}
