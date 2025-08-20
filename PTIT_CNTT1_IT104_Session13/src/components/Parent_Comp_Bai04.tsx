import React, { Component } from "react";
import Children_Comp_Bai04 from "./Children_Comp_Bai04";

export default class Parent_Comp_Bai04 extends Component {
  render() {
    return (
      <>
        <div>Ho ten ben component cha: Dang Quoc Toan</div>
        <Children_Comp_Bai04 />
      </>
    );
  }
}
