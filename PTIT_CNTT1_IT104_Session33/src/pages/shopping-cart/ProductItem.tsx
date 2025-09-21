import React, { useState } from "react";
import type { ICart, IProduct } from "../../interfaces/product.interface";
import { useAppDispatch } from "../../hook/useRedux";

type PropType = {
  product: IProduct;
};

export default function ProductItem({ product }: PropType) {
  const [value, setValue] = useState<number>(product.quantity > 0 ? 1 : 0);
  const [newCart, setNewCart] = useState<ICart>({
    id: product.id,
    name: product.name,
    quantity: value,
    price: product.price,
  });

  const dispatch = useAppDispatch();

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    if (Number(e.target.value) > product.quantity - 1) {
      alert("Out of stock");
      setValue(value);
    } else {
      setNewCart({ ...newCart, quantity: Number(e.target.value) });
    }
  };

  const onAdd = () => {
    dispatch({ type: "ADD_CART", payload: newCart });
    if (product.quantity > 0) {
      setValue(1);
    } else {
      setValue(0);
    }
  };

  return (
    <div>
      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={product.image} alt="pizza" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.name}</h4>
          <p>{product.description}</p>
          {value === 0 ? (
            <></>
          ) : (
            <input
              onChange={handleChangeQuantity}
              name="quantity-product-1"
              type="number"
              min={1}
              value={value}
            />
          )}

          <br />
          {value === 0 ? (
            <span className="price"> {product.price} USD</span>
          ) : (
            <a
              onClick={onAdd}
              data-product={1}
              className="price cursor-pointer"
            >
              {product.price} USD
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
