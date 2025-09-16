import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function ListProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const getAllProduct = async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:3000/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  console.log(products);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.product_name} width={80} />
            <p>{p.product_name}</p>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <p>Số lượng: {p.quantity}</p>
            <p>Ngày tạo: {p.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
