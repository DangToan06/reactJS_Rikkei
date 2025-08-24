import React, { Component, type ChangeEvent } from "react";

type StateType = {
  range: number;
};

export default class Bai4 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      range: 0,
    };
  }

  render() {
    const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({ ...this.state, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(this.state.range);
    };
    return (
      <>
        <div>Tien do hoan thanh: {this.state.range}%</div>
        <form onSubmit={handleSubmit}>
          <input type="range" name="range" onChange={handleRange} />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
