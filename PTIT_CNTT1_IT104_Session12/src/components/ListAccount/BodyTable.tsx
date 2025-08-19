import React from "react";

export const BodyTable = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Malcolm Lockyer</td>
        <td>21/03/1961</td>
        <td>Nam</td>
        <td>New York</td>
        <td>
          <button className="btn-edit">Sửa</button>
          <button className="btn-delete">Xóa</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Maria</td>
        <td>11/02/1990</td>
        <td>Nữ</td>
        <td>London</td>
        <td>
          <button className="btn-edit">Sửa</button>
          <button className="btn-delete">Xóa</button>
        </td>
      </tr>
    </tbody>
  );
};
