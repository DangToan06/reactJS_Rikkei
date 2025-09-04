import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Bai06() {
  return (
    <div>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  );
}
