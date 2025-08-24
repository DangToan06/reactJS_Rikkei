import React, { Component } from "react";

type PropsType = {
  onOpen: () => void;
};

export default class Add extends Component<PropsType> {
  render() {
    return (
      <div style={{ alignContent: "center" }}>
        <button
          style={{
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "10px 25px",
            borderRadius: "5px",
            border: "none",
            height: "40px",
          }}
          onClick={this.props.onOpen}
        >
          Thêm mới sinh viên
        </button>
      </div>
    );
  }
}
