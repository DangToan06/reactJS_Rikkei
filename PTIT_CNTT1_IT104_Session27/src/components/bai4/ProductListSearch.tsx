import React, { useEffect, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { products, type ProductI } from "../bai2/Data/data";

export default function ProductListSearch() {
  const [listProducts, setListProducts] = useState<ProductI[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const search = searchParams.get("search") || "";
    setKeyword(search);
    setListProducts(products);
  }, [searchParams]);

  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-medium px-2.5 py-5">Danh sách sản phẩm</h1>

      <div className="px-2.5 flex gap-4">
        <input
          type="text"
          className="border px-2"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-[5px] rounded-[3px] cursor-pointer hover:bg-blue-800"
        >
          Search
        </button>
      </div>

      <div className="flex gap-4 px-2.5 py-5">
        {listProducts
          .filter((p) => p.name.toLowerCase().includes(keyword.toLowerCase()))
          .map((e) => (
            <div className="border p-[10px] rounded-[3px] bg-[#fff]" key={e.id}>
              <h1 className="text-1xl font-bold">{e.name}</h1>
              <p>Giá: {e.price.toLocaleString("vi-VN")} VNĐ</p>
              <p className="text-blue-700">
                <Link to={`${e.id}`}>Xem chi tiết</Link>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
