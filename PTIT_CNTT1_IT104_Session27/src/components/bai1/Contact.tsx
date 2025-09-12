import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="text-center pt-25">
      <h1 className="text-3xl font-bold">Thông tin liên hệ</h1>
      <p>
        <span className="font-bold">Email: </span>
        <span className="text-blue-700">
          <Link to=""> nguyenvana@gmail.com</Link>
        </span>
      </p>
      <p>
        <span className="font-bold">Sđt: </span>0822817206
      </p>
      <p>
        <span className="font-bold">Linkedln: </span>
        <span className="text-blue-700">
          <Link to="">linkedin.com/in/nguyenvana</Link>
        </span>
      </p>
    </div>
  );
}
