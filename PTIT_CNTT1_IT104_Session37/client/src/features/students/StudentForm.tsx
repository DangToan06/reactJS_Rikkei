import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import type { StudentI } from "../../interfaces/student.interface";

interface Props {
  open: boolean;
  initial?: Partial<StudentI>;
  onClose: () => void;
  onSubmit: (data: {
    id: number;
    name: string;
    age: number;
    grade: string;
  }) => void;
}

const StudentForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
}) => {
  const [statusInputName, setStatusInputName] = useState(false);
  const [statusInputAge, setStatusInputAge] = useState(false);
  const [statusInputGrade, setStatusInputGrade] = useState(false);

  const [id, setId] = useState(initial.id ?? Date.now());
  const [name, setName] = useState(initial.name ?? "");
  const [age, setAge] = useState(initial.age ?? 16);
  const [grade, setGrade] = useState(initial.grade ?? "");

  useEffect(() => {
    setId(initial.id ?? Date.now());
    setName(initial.name ?? "");
    setAge(initial.age ?? 16);
    setGrade(initial.grade ?? "");
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatusInputName(true);
    } else {
      setStatusInputName(false);
    }

    if (!grade.trim()) {
      setStatusInputGrade(true);
    } else {
      setStatusInputGrade(false);
    }

    if (age === 0) {
      setStatusInputAge(true);
    } else {
      setStatusInputAge(false);
    }

    if (!name.trim() || !grade.trim() || age == 0) return;

    onSubmit({
      id: id,
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Student" : "Add Student"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label={statusInputName ? "Name cannot be blank" : "Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            // required
            autoFocus
            // onBlur={() => setStatusInputName(true)}
            error={statusInputName}
          />
          <TextField
            label={statusInputAge ? "Age cannot be zero" : "Age"}
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            fullWidth
            inputProps={{ min: 0 }}
            // onBlur={() => setTouched(true)}
            error={statusInputAge}
          />
          <TextField
            label={statusInputGrade ? "Grade cannot be blank" : "Grade"}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            placeholder="e.g. 10A1"
            // onBlur={() => setTouched(true)}
            error={statusInputGrade}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StudentForm;
