import React, { Component } from "react";
import { PencilLine, Trash } from "lucide-react";
import ConfirmDelete from "./ConfirmDelete";
import EditTaskModal from "./EditTaskModal";
import "./TodoList.css";

type StateType = {
  inputValue: string;
  inputIsBlank: boolean;
  arrTodoList: string[];
  isShowConfirm: boolean;
  deleteIndex: number | null;
  isEditOpen: boolean;
  editingTaskId: number | null;
};

export default class TodoList extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: "",
      inputIsBlank: false,
      arrTodoList: JSON.parse(localStorage.getItem("todoList") || "[]"),
      isShowConfirm: false,
      deleteIndex: null,
      isEditOpen: false,
      editingTaskId: null,
    };
  }

  componentDidUpdate(prevState: StateType): void {
    if (prevState.arrTodoList !== this.state.arrTodoList) {
      localStorage.setItem("todoList", JSON.stringify(this.state.arrTodoList));
    }
  }

  render() {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        inputValue: e.target.value,
        inputIsBlank: false,
      });
    };

    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (this.state.inputValue.trim() === "") {
        this.setState({ inputIsBlank: true });
        return;
      }

      this.setState((prevState) => ({
        arrTodoList: [...prevState.arrTodoList, prevState.inputValue],
        inputValue: "",
        inputIsBlank: false,
      }));
    };

    const handleShowConfirm = (index: number) => {
      this.setState({ isShowConfirm: true, deleteIndex: index });
    };

    const handleCloseConfirm = () => {
      this.setState({ isShowConfirm: false, deleteIndex: null });
    };

    const handleConfirmDelete = () => {
      if (this.state.deleteIndex !== null) {
        this.setState((prevState) => {
          const newList = [...prevState.arrTodoList];
          newList.splice(prevState.deleteIndex!, 1);
          return {
            arrTodoList: newList,
            isShowConfirm: false,
            deleteIndex: null,
          };
        });
      }
    };

    const openEditModal = (id: number) => {
      this.setState({ isEditOpen: true, editingTaskId: id });
    };

    const closeEditModal = () => {
      this.setState({ isEditOpen: false, editingTaskId: null });
    };

    const saveEdit = (newName: string) => {
      if (this.state.editingTaskId !== null) {
        this.setState((prev) => {
          const updatedList = [...prev.arrTodoList];
          updatedList[prev.editingTaskId!] = newName;
          return {
            arrTodoList: updatedList,
            isEditOpen: false,
            editingTaskId: null,
          };
        });
      }
    };

    return (
      <div className="container-todolist">
        <h2 className="title">Danh sách công việc</h2>
        <form>
          <input
            type="text"
            placeholder="Nhập tên công việc"
            value={this.state.inputValue}
            onChange={handleChangeInput}
          />
          <button onClick={handleAdd}>Thêm</button>
        </form>

        {this.state.inputIsBlank && (
          <span style={{ color: "red" }}>
            Tên công việc không được để trống
          </span>
        )}

        <main>
          {this.state.arrTodoList.map((e, i) => {
            return (
              <div key={i} className="todo-item">
                <div>
                  <input type="checkbox" />
                  <span>{e}</span>
                </div>
                <div>
                  <button onClick={() => openEditModal(i)}>
                    <PencilLine />
                  </button>
                  <button onClick={() => handleShowConfirm(i)}>
                    <Trash />
                  </button>
                </div>
              </div>
            );
          })}
        </main>

        {/* Confirm Delete */}
        {this.state.isShowConfirm && (
          <ConfirmDelete
            onConfirm={handleConfirmDelete}
            onCancel={handleCloseConfirm}
          />
        )}

        {this.state.isEditOpen && this.state.editingTaskId !== null && (
          <EditTaskModal
            isOpen={this.state.isEditOpen}
            taskName={this.state.arrTodoList[this.state.editingTaskId]}
            onCancel={closeEditModal}
            onSave={saveEdit}
          />
        )}

        <div>
          <p>Công việc đã hoàn thành: 0/{this.state.arrTodoList.length}</p>
        </div>
      </div>
    );
  }
}
