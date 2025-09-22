import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";

const StudentManagement = () => {
  const students: Student[] = useAppSelector((state) => state.studentReducer);
  const dispatch = useAppDispatch();

  const handleAddStudent = (student: Student) => {
    dispatch({ type: "ADD_STUDENT", payload: student });
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar />
        <StudentList students={students} />
      </div>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentManagement;
