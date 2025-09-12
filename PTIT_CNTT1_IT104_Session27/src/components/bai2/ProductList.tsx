import React, { useEffect, useState } from "react";
import { products, type ProductI } from "./Data/data";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [listProducts, setListProducts] = useState<ProductI[] | null>(null);

  const data: ProductI[] = products;

  useEffect(() => {
    if (data) {
      setListProducts([...data]);
    } else {
      setListProducts([]);
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-medium px-2.5 py-5">Danh sách sản phẩm</h1>
      <div className="flex gap-4 px-2.5 py-5">
        {listProducts ? (
          listProducts.map((e) => {
            return (
              <div
                className="border p-[10px] rounded-[3px] bg-[#fff]"
                key={e.id}
              >
                <h1 className="text-1xl font-bold">{e.name}</h1>
                <p>Giá: {e.price.toLocaleString("vi-VN")} VNĐ</p>
                <p className="text-blue-700">
                  <Link to={`${e.id}`}>Xem chi tiết</Link>
                </p>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
