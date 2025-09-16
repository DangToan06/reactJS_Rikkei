import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { Input, Modal, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";

export interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: Date;
}

export default function ListStudents() {
  const [dataStudent, setDataStudent] = useState<Student[]>([]);
  const [searchStudent, setSearchStudent] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  const getAllStudent = async () => {
    try {
      let url = "http://localhost:3000/students";

      if (searchStudent) {
        url += `?id_like=${searchStudent}`;
      }

      const response = await axios.get(url);
      setDataStudent(response.data);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };

  useEffect(() => {
    getAllStudent();
  }, [searchStudent]);

  const showDeleteModal = (student: Student) => {
    setStudentToDelete(student);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!studentToDelete) return;
    try {
      await axios.delete(
        `http://localhost:3000/students/${studentToDelete.id}`
      );
      message.success("Xóa sinh viên thành công!");
      getAllStudent();
    } catch (error) {
      message.error("Xóa sinh viên thất bại!");
      console.log("Lỗi: ", error);
    } finally {
      setIsModalOpen(false);
      setStudentToDelete(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStudentToDelete(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="bg-slate-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h2 className="text-lg font-medium">Quản lý sinh viên</h2>
        <ModalAdd onSuccess={getAllStudent} />
      </div>

      <Input
        placeholder="Nhập id để tìm sinh viên"
        style={{ margin: "10px 30px", width: "500px" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchStudent(Number(e.target.value))
        }
        value={searchStudent}
      />

      <div className="md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left"></th>
              <th className="px-4 py-3 text-left">Tên sinh viên</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Địa chỉ</th>
              <th className="px-4 py-3 text-left">Số điện thoại</th>
              <th className="px-4 py-3 text-left">Lựa chọn</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dataStudent.length !== 0 ? (
              dataStudent.map((student, index) => (
                <tr
                  key={student.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3">
                    <input type="checkbox" className="cursor-pointer" />
                  </td>
                  <td className="px-4 py-3">{student.student_name}</td>
                  <td className="px-4 py-3">{student.email}</td>
                  <td className="px-4 py-3">{student.address}</td>
                  <td className="px-4 py-3">{student.phone}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        className="text-orange-500 hover:text-orange-700 p-1 cursor-pointer"
                        title="Chỉnh sửa"
                      >
                        <EditOutlined />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        title="Xóa"
                        onClick={() => showDeleteModal(student)}
                      >
                        <DeleteFilled />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Không tìm thấy sinh viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Xóa */}
      <Modal
        title="Xác nhận xóa"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xóa"
        okButtonProps={{ danger: true }}
        cancelText="Hủy"
      >
        <p>
          Bạn có chắc chắn muốn xóa sinh viên{" "}
          <b>{studentToDelete?.student_name}</b> không?
        </p>
      </Modal>
    </div>
  );
}
