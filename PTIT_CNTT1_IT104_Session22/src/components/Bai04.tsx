import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Bai04() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Nguyễn Văn Nam">
      <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
    </DropdownButton>
  );
}
