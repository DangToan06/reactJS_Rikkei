import React, { Component } from "react";

type StateType = {
  color: string;
};

export default class Bai2 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "",
    };
  }
  render() {
    const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({ ...this.state, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(this.state.color);
    };

    return (
      <div>
        <h2>Color: {this.state.color}</h2>
        <h3>Form</h3>
        <p>Màu sắc</p>
        <form onSubmit={handleSubmit}>
          <input type="color" name="color" onChange={handleColor} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
