import React, { Component } from "react";

type StateTheme = {
  isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<object, StateTheme> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.isDarkMode ? "#222" : "white",
          padding: "50px",
          borderRadius: "10px",
        }}
      >
        {this.state.isDarkMode === false ? (
          <h1 style={{ color: "black" }}>☀️ Che do sang dang bat</h1>
        ) : (
          <h1>🌙 Che do toi dang bat</h1>
        )}

        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            this.setState({ isDarkMode: !this.state.isDarkMode });
          }}
        >
          Chuyen theme
        </button>
      </div>
    );
  }
}
