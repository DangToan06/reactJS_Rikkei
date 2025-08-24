import React, { Component } from "react";
import Add from "./Add";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Table from "./Table";
import ModalAddStudent from "./ModalAddStudent";
import ModalBlockStudent from "./ModalBlockStudent";
import ModalDeleteStudent from "./ModalDeleteStudent";

type Student = {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: boolean;
};

type PropsType = {
  student?: Student;
};

type StateType = {
  student: Student;
  listStudent: Student[];
  isShowAddStudent: boolean;
  isShowBlockStudent: boolean;
  findId: string;
  isShowDeleteStudent: boolean;
  deleteIndex: number | null;
};

export default class IndexManagerStudent extends Component<
  PropsType,
  StateType
> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      student: {
        id: "",
        name: "",
        dob: "",
        email: "",
        status: true,
      },
      listStudent: [
        {
          id: "SV001",
          name: "Dang Quoc Toan",
          dob: "Cybersecurity",
          email: "dqt@gmail.com",
          status: true,
        },
        {
          id: "SV002",
          name: "Mai Van Huy",
          dob: "DevOps",
          email: "mvh@gmail.com",
          status: true,
        },
        {
          id: "SV003",
          name: "Quach Bach",
          dob: "AI",
          email: "qb@gmail.com",
          status: true,
        },
      ],
      isShowAddStudent: false,
      isShowBlockStudent: false,
      findId: "",
      isShowDeleteStudent: false,
      deleteIndex: null,
    };
  }
  render() {
    const openAddModal = () => {
      this.setState({ isShowAddStudent: true });
    };

    const closeAddModal = () => {
      this.setState({ isShowAddStudent: false });
    };

    const saveModal = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({ student: { ...this.state.student, [name]: value } });
    };

    const validateEmail = (email: string): boolean => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    const validExistEmail = (email: string): boolean => {
      if (
        this.state.listStudent.find(
          (e) => e.email.toLowerCase() === email.toLowerCase()
        )
      ) {
        return true;
      } else {
        return false;
      }
    };

    const validExistId = (id: string): boolean => {
      if (
        this.state.listStudent.find(
          (e) => e.id.toLowerCase() === id.toLowerCase()
        )
      ) {
        return true;
      } else {
        return false;
      }
    };

    const onSave = (e: React.FormEvent) => {
      e.preventDefault();
      if (
        this.state.student.id.trim() === "" ||
        this.state.student.name.trim() === "" ||
        this.state.student.email.trim() === ""
      ) {
        this.setState({ isShowAddStudent: true });
        alert("Không được để trống");
      } else if (!validateEmail(this.state.student.email)) {
        this.setState({ isShowAddStudent: true });
        alert("Email sai định dạng");
      } else if (
        validExistEmail(this.state.student.email) ||
        validExistId(this.state.student.id)
      ) {
        this.setState({ isShowAddStudent: true });
        alert("Email hoặc mã sinh viên bị trùng");
      } else {
        this.setState({
          listStudent: [...this.state.listStudent, this.state.student],
          student: {
            id: "",
            name: "",
            dob: "",
            email: "",
            status: true,
          },
          isShowAddStudent: false,
        });
        alert("Thêm tài khản thành công");
      }
    };

    //Chặn sinh viên

    const openBlockModal = () => {
      this.setState({ isShowBlockStudent: true });
    };

    const closeBlockModal = () => {
      this.setState({ isShowBlockStudent: false });
    };

    const getIdStudent = (id: string): string => {
      if (this.state.listStudent.find((e) => e.id === id)) {
        this.setState({
          findId: id,
        });
        console.log(this.state.findId);

        return id;
      } else {
        return "";
      }
    };

    const saveBlock = (e: React.FormEvent) => {
      e.preventDefault();
      const stu: Student | undefined = this.state.listStudent.find(
        (e) => e.id === this.state.findId
      );

      if (stu) {
        stu.status = false;
        this.setState({
          listStudent: [...this.state.listStudent],
        });
      } else {
        alert("Kh0ng tim thay hocj sinh");
      }
    };

    // xóa sinh viên
    const getIndexStudent = (index: number) => {
      this.setState({
        deleteIndex: index,
      });
    };

    const openDeleteModal = () => {
      this.setState({ isShowDeleteStudent: true });
    };

    const closeDeletModal = () => {
      this.setState({ isShowDeleteStudent: false });
    };

    const handleConfirmDelete = () => {
      if (this.state.deleteIndex !== null) {
        const newList = [...this.state.listStudent];
        newList.splice(this.state.deleteIndex, 1);
        this.setState({
          listStudent: newList,
          isShowDeleteStudent: false,
        });
      }
    };

    return (
      <>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Quản lý sinh viên</h1>
            <Add onOpen={openAddModal} />
          </div>
          <Filter />
          <Table
            listStudentV={this.state.listStudent}
            onOpen={openBlockModal}
            getIdStudent={getIdStudent}
            getIndexStudent={getIndexStudent}
            onOpenD={openDeleteModal}
          />
          <Pagination />
        </div>

        {this.state.isShowAddStudent && (
          <ModalAddStudent
            onCancel={closeAddModal}
            saveModal={saveModal}
            onSave={onSave}
          />
        )}

        {this.state.isShowBlockStudent && (
          <ModalBlockStudent onCancel={closeBlockModal} saveBlock={saveBlock} />
        )}

        {this.state.isShowDeleteStudent && (
          <ModalDeleteStudent
            onCancel={closeDeletModal}
            onConfirm={handleConfirmDelete}
          />
        )}
      </>
    );
  }
}
