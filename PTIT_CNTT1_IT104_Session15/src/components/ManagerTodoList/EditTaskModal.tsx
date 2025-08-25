import React, { Component } from "react";
import "./EditTaskModal.css";

type EditTaskModalProps = {
  isOpen: boolean;
  taskName: string;
  onCancel: () => void;
  onSave: (newName: string) => void;
};

type EditTaskModalState = {
  newName: string;
};

export default class EditTaskModal extends Component<
  EditTaskModalProps,
  EditTaskModalState
> {
  constructor(props: EditTaskModalProps) {
    super(props);
    this.state = {
      newName: this.props.taskName,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newName: e.target.value });
  };

  handleSave = () => {
    this.props.onSave(this.state.newName);
  };

  render() {
    if (!this.props.isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h3 className="modal-title">Cập nhật công việc</h3>
            <button className="close-button" onClick={this.props.onCancel}>
              ×
            </button>
          </div>

          <div className="modal-content">
            <label>Tên công việc</label>
            <input
              type="text"
              value={this.state.newName}
              onChange={this.handleChange}
            />
          </div>

          <div className="modal-footer">
            <button className="button-cancel" onClick={this.props.onCancel}>
              Hủy
            </button>
            <button className="button-confirm" onClick={this.handleSave}>
              Đồng ý
            </button>
          </div>
        </div>
      </div>
    );
  }
}
