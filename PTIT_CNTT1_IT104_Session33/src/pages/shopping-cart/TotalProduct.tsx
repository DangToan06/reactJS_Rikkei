import type { ICart } from "../../interfaces/product.interface";
import { useAppSelector } from "../../hook/useRedux";
import { useEffect, useState } from "react";

export default function TotalProduct() {
  const carts: ICart[] = useAppSelector((state) => state.cartReducer);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calcTotalPrice = () => {
    setTotalPrice(carts.reduce((sum, c) => sum + c.price * c.quantity, 0));
  };

  useEffect(() => {
    calcTotalPrice();
  }, [carts]);

  return (
    <tr>
      <td colSpan={4}>
        There are <b>{carts.length}</b> items in your shopping cart.
      </td>
      <td colSpan={2} className="total-price text-left">
        {totalPrice} USD
      </td>
    </tr>
  );
}
