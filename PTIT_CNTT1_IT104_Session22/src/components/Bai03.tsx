import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Bai03() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://imgs.search.brave.com/yjc3lMGNJEJY7pOpF-dV_AAs3kroZMdkqmJkXKJpxPQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzVmYjJj/YzU3NWM5OTE0NzEz/ZWFkMDNkZS80OjMv/d183NDgsY19saW1p/dC9HZWFyLUFwcGxl/LU1hY0Jvb2stQWly/LXRvcC1kb3duLVNP/VVJDRS1BcHBsZS5q/cGc"
        />
        <Card.Body>
          <Card.Title>MacBook Art 2018</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Xem chi tiết</Button>
          <span style={{ paddingLeft: "40px" }}>30.000.000đ</span>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://imgs.search.brave.com/uiX2KQEjBmaLlR6K-B10ikeWlwi_MH0HZk9JNKhMsRo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/ODM4NjI1Mi9waG90/by9hcHBsZS1tYWNi/b29rLXByby5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QlZS/WTNjSWN6VEExUVJQ/YUxmcXlYd3lFUjha/R1AyVE81QjR1OV9S/c3lLWT0"
        />
        <Card.Body>
          <Card.Title>macBook Pro 2019</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">XEm chi tiết</Button>
          <span style={{ paddingLeft: "40px" }}>30.000.000đ</span>
        </Card.Body>
      </Card>
    </div>
  );
}
