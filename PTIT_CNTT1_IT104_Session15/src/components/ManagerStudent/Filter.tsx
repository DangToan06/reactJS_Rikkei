import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "end", gap: "15px" }}>
        <select name="" id="" style={{ padding: "5px 10px" }}>
          <option value="">Xắp xếp theo tuổi</option>
          <option value="">Xắp xếp theo mã sinh viên</option>
          <option value="">Xắp xếp theo họ tên</option>
        </select>
        <input
          style={{ padding: "5px 10px", width: "25%" }}
          type="text"
          name="name"
          placeholder="Tìm kiếm từ khóa theo tên hoặc email"
        />
      </div>
    );
  }
}
