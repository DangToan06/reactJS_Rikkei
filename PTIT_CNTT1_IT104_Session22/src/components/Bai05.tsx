import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

interface Variant {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
}

export default function Bai05() {
  const variant = useState<Variant>({
    primary: "primary",
    secondary: "secondary",
    success: "success",
    danger: "danger",
    warning: "warning",
    info: "info",
    light: "light",
    dark: "dark",
  });

  return (
    <>
      <Alert key={variant[0].success} variant={variant[0].success}>
        Thêm tài khản thành công!
      </Alert>
      <Alert key={variant[0].danger} variant={variant[0].danger}>
        Thêm mới tài khản thất bại!
      </Alert>
      <Alert key={variant[0].warning} variant={variant[0].warning}>
        Tên không được để trống
      </Alert>
    </>
  );
}
