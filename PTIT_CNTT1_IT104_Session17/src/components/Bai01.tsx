import React, { useState } from "react";

export default function Bai01() {
  const name = useState<string>("Dang Quoc Toan");

  return (
    <>
      <div>Ho ten: {name[0]}</div>
    </>
  );
}
