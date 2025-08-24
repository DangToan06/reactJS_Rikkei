import React, { Component } from "react";
import "./Table.css";

type Student = {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: boolean;
};

type PropsType = {
  listStudentV?: Student[];
  onOpen: () => void;
  getIdStudent: (e: string) => void;
  onOpenD: () => void;
  getIndexStudent: (id: number) => void;
};

export default class Table extends Component<PropsType> {
  render() {
    return (
      <>
        <div className="container">
          <table className="table-css">
            <thead className="head-table">
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Trang thái</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody className="body-table">
              {this.props.listStudentV?.length === 0 ? (
                <div>Not have student</div>
              ) : (
                this.props.listStudentV?.map((stu, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{stu.id}</td>
                      <td>{stu.name}</td>
                      <td>{stu.dob}</td>
                      <td>{stu.email}</td>
                      <td>
                        {stu.status === true ? (
                          <span className="active">Đang hoạt động</span>
                        ) : (
                          <span className="non-active">Không hoạt động</span>
                        )}
                      </td>
                      <td className="btn-manager">
                        <button
                          className="block"
                          onClick={() => {
                            this.props.onOpen();
                            this.props.getIdStudent(stu.id);
                          }}
                        >
                          Chặn
                        </button>
                        <button className="edit"> Sửa </button>
                        <button
                          className="delete"
                          onClick={() => {
                            this.props.onOpenD();
                            this.props.getIndexStudent(index);
                          }}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
