import React, { Component } from "react";

type StateType = {
  dob: string;
};

export default class Bai3 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      dob: "",
    };
  }

  handleGetDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state.dob);
  };

  render() {
    return (
      <>
        <div>Ngay sinh: {this.state.dob}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="date" name="dob" onChange={this.handleGetDate} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
