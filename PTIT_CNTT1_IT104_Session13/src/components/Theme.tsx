import React, { Component } from "react";

type StateType = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class Theme extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "light",
      language: "english",
    };
  }

  toggleTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  toggleLanguage = () => {
    this.setState((prev) => ({
      language: prev.language === "english" ? "vietnamese" : "english",
    }));
  };

  render() {
    const { theme, language } = this.state;

    const appStyle = {
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      padding: "20px",
    };

    const text =
      language === "english"
        ? theme === "light"
          ? "Theme = Light and Language = English"
          : "Theme = Dark and Language = English"
        : theme === "light"
        ? "Giao diện Sáng và Ngôn ngữ = Tiếng Việt"
        : "Giao diện Tối và Ngôn ngữ = Tiếng Việt";

    return (
      <div style={appStyle}>
        <p>{text}</p>

        <button onClick={this.toggleTheme} style={{ marginRight: "10px" }}>
          Toggle Theme
        </button>
        <button onClick={this.toggleLanguage}>Toggle Language</button>
      </div>
    );
  }
}
