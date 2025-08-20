import React, { Component } from "react";

interface IPerson {
  id: number;
  name: string;
  dob: string;
  address: string;
}

export default class Exercise02 extends Component<object, IPerson> {
  constructor(prop: object) {
    super(prop);
    this.state = {
      id: 1,
      name: "Nguyen van son",
      dob: "20/12/2025",
      address: "Thanh xuan, HN",
    };
  }

  render() {
    return (
      <>
        <h1>Thong tin ca nhan</h1>
        <p>id: {this.state.id}</p>
        <p>Ten: {this.state.name}</p>
        <p>Ngay sinh :{this.state.dob}</p>
        <p>Dia chi: {this.state.address}</p>
      </>
    );
  }
}
