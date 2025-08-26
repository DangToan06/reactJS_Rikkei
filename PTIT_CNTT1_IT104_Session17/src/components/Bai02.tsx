import React, { useState } from "react";

interface ProductI {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Bai02() {
  const product = useState<ProductI>({
    id: "1",
    name: "Coca Cola",
    price: 1000,
    quantity: 10,
  });

  return (
    <div>
      <h1>Thong tin san pham</h1>
      <p>Id: {product[0].id}</p>
      <p>Name: {product[0].name}</p>
      <p>Price: {product[0].price} $</p>
      <p>Quantity: {product[0].quantity}</p>
    </div>
  );
}
