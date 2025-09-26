import React from "react";
import StudentItem from "./StudentItem";
import type { StudentI } from "../../interfaces/student.interface";

interface Props {
  students: StudentI[];
  onEdit: (s: StudentI) => void;
  onDelete: (id: number) => void;
}

const StudentList: React.FC<Props> = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Không có học sinh nào
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {students.map((s) => (
        <StudentItem
          key={s.id}
          student={s}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default StudentList;
