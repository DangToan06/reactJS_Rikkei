import React, { Component } from "react";
import { OctagonAlert } from "lucide-react";
import "./ModalBlockStudent.css";

type PropsType = {
  onCancel: () => void;
  saveBlock: (e: React.FormEvent) => void;
};

export default class ModalBlockStudent extends Component<PropsType> {
  render() {
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-head">
            <h3 className="modal-title">Xác nhận</h3>
            <button className="close-button" onClick={this.props.onCancel}>
              ×
            </button>
          </div>
          <div className="modal-content">
            <div className="content">
              <OctagonAlert style={{ color: "red" }} />
              <span>Bạn có chắc muốn chặn sinh viên này không</span>
            </div>
          </div>
          <div className="modal-footer">
            <button className="button-cancel" onClick={this.props.onCancel}>
              Hủy
            </button>
            <button className="button-confirm" onClick={this.props.saveBlock}>
              Chặn
            </button>
          </div>
        </div>
      </div>
    );
  }
}
