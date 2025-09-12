import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products, type ProductI } from "./Data/data";

export default function ProductDetail() {
  const productId = useParams();
  const navigate = useNavigate();

  const product: ProductI | undefined = products.find(
    (e) => e.id === Number(productId.id)
  );

  return (
    <div>
      {product ? (
        <div>
          <h1 className="text-2xl font-medium px-2.5 py-5">
            Chi tiết sản phẩm
          </h1>
          <div className="px-2.5">
            <p className="text-1xl font-medium">{product.name}</p>
            <p>Giá: {product.price.toLocaleString("vi-VN")} VNĐ</p>
            <p>Mô tả: {product.description}</p>
            <button
              onClick={() => navigate(-1)}
              className="text-blue-700 cursor-pointer"
            >
              Quay lai danh sách sản phẩm
            </button>
          </div>
        </div>
      ) : (
        <h1>Không cá sản phẩm nào hợp lệ</h1>
      )}
    </div>
  );
}
