import React, { Component } from "react";
import "./ModalAddStudent.css";

type PropsType = {
  onCancel: () => void;
  saveModal?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave?: (e: React.FormEvent) => void;
};

export default class ModalAddStudent extends Component<PropsType> {
  render() {
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-head">
            <h3 className="modal-title">Cập nhật công việc</h3>
            <button className="close-button" onClick={this.props.onCancel}>
              ×
            </button>
          </div>
          <div className="modal-content">
            <form onSubmit={this.props.onSave}>
              <label>
                Mã sinh viên<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                required
                name="id"
                onChange={this.props.saveModal}
              />
              <label>
                Tên sinh viên<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                required
                name="name"
                onChange={this.props.saveModal}
              />
              <label>Ngày sinh</label>
              <input type="date" name="dob" onChange={this.props.saveModal} />
              <label>
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                required
                name="email"
                onChange={this.props.saveModal}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button className="button-cancel" onClick={this.props.onCancel}>
              Hủy
            </button>
            <button className="button-confirm" onClick={this.props.onSave}>
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    );
  }
}
