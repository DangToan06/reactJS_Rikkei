import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { useState } from "react";

const StudentManagement = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editStudent, setEditStudent] = useState<Student | undefined>();
  const students: Student[] = useAppSelector((state) => state.studentReducer);
  const dispatch = useAppDispatch();

  const handleAddStudent = (student: Student) => {
    dispatch({ type: "ADD_STUDENT", payload: student });
  };

  const openEdit = (student: Student) => {
    setIsEdit(!isEdit);
    setEditStudent(student);
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar />
        <StudentList students={students} openEdit={openEdit} />
      </div>
      <StudentForm
        onSubmit={handleAddStudent}
        isEdit={isEdit}
        editStudent={editStudent}
      />
    </div>
  );
};

export default StudentManagement;
