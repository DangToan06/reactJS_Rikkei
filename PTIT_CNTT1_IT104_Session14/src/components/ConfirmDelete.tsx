import React, { Component } from "react";
import "./ConfirmDelete.css";

type PropState = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default class ConfirmDelete extends Component<PropState> {
  render() {
    return (
      <div id="modal" className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h3 className="modal-title">Xác nhận</h3>
            <button className="close-button">×</button>
          </div>

          <div className="modal-content">
            <div className="warning-message">
              <div className="warning-icon">!</div>
              <div>Bạn có xác nhận xóa công việc không?</div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              className="button button-cancel"
              onClick={this.props.onCancel}
            >
              Hủy
            </button>
            <button
              className="button button-confirm"
              onClick={this.props.onConfirm}
            >
              Đồng ý
            </button>
          </div>
        </div>
      </div>
    );
  }
}
