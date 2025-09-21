import React from "react";
import CartItem from "./CartItem";
import TotalProduct from "./TotalProduct";
import type { ICart } from "../../interfaces/product.interface";
import { useAppSelector } from "../../hook/useRedux";

export default function ListCart() {
  const carts: ICart[] = useAppSelector((state) => state.cartReducer);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="w-[4%]">STT</th>
          <th>Name</th>
          <th className="w-[15%]">Price</th>
          <th className="w-[4%]">Quantity</th>
          <th className="w-[25%]">Action</th>
        </tr>
      </thead>
      <tbody id="my-cart-body">
        {carts.length === 0 ? (
          <tr>
            <td colSpan={4}>
              <span className="font-bold">Empty product in your cart</span>
            </td>
          </tr>
        ) : (
          carts.map((c: ICart) => <CartItem cart={c} key={c.id}></CartItem>)
        )}
      </tbody>

      <tfoot id="my-cart-footer">
        {carts.length === 0 ? <></> : <TotalProduct></TotalProduct>}
      </tfoot>
    </table>
  );
}
