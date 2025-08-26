import React, { Component } from "react";

type StateType = {
  isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const toggle = () => {
      this.setState((b) => ({ isLoggedIn: !b.isLoggedIn }));
    };

    return (
      <div>
        {this.state.isLoggedIn === true ? (
          <div
            style={{
              backgroundColor: "#f0f8ff",
              padding: "50px",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ color: "black" }}>Vui long dang nhap de tiep tuc</h2>
            <button onClick={toggle} style={{ backgroundColor: "blue" }}>
              Dang Nhap
            </button>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#f0f8ff",
              padding: "50px",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ color: "black" }}>Xin chao, user!</h2>
            <button onClick={toggle} style={{ backgroundColor: "blue" }}>
              Dang Xuat
            </button>
          </div>
        )}
      </div>
    );
  }
}
