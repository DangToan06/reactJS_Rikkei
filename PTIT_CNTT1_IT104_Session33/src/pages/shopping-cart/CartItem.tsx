import React, { useState } from "react";
import type { ICart } from "../../interfaces/product.interface";
import { Modal } from "antd";
import { useAppDispatch } from "../../hook/useRedux";

type PropType = {
  cart: ICart;
};

export default function CartItem({ cart }: PropType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    dispatch({ type: "DELETE_CART", payload: cart });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    console.log(newQuantity);
  };

  return (
    <tr>
      <th scope="row">1</th>
      <td>{cart.name}</td>
      <td>{cart.price} USD</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          value={cart.quantity}
          min={1}
          onChange={handleChange}
        />
      </td>
      <td>
        <a className="label label-info update-cart-item" data-product="">
          Update
        </a>
        <a
          onClick={showModal}
          className="label label-danger delete-cart-item"
          data-product=""
        >
          Delete
        </a>
      </td>

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc muốn xóa {cart.name}</p>
      </Modal>
    </tr>
  );
}
