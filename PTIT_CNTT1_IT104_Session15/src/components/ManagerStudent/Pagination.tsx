import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { Component } from "react";
import "./Pagination.css";

type StateType = {
  currentPage: number;
  pageSize: number;
};

export default class Pagination extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 5,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="btn-pre">
          <ChevronLeft />
        </div>
        <div className="container-pagination">
          <div className="num-page current">1</div>
          <div className="num-page">2</div>
          <div className="num-page">3</div>
          <div className="num-page">4</div>
          <div className="num-page">5</div>
        </div>
        <div className="btn-next">
          <ChevronRight />
        </div>
      </div>
    );
  }
}
