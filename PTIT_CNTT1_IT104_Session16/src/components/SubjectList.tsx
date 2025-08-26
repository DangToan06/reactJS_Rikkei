import React, { Component } from "react";

const subjects = ["Toan", "Van", "Anh", "Hoa", "Sinh"];

export default class SubjectList extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Danh sách môn học</h1>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: "0",
          }}
        >
          {subjects.map((sub) => {
            return (
              <li
                style={{
                  backgroundColor: "#e0f7fa",
                  color: "black",
                  borderRadius: "5px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                {sub}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
