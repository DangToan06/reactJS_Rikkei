import React, { Component, type ChangeEvent } from "react";

type StateType = {
  email: string;
};

export default class Bai1 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
  }

  render() {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({ ...this.state, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(this.state);
    };

    return (
      <>
        <h2>Form</h2>
        <label>Email</label>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="nva@gmail.com"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
