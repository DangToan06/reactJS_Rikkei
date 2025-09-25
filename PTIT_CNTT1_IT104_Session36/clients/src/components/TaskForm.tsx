import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../hooks/useRedux";

interface TaskFormProps {
  onAdd: (title: string, priority: "low" | "medium" | "high") => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const { data: tasks } = useAppSelector((store) => store.tasks);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") {
      alert("Tên công việc không được để trống");
      return;
    }

    if (
      tasks.filter(
        (t) => t.taskName.toLocaleLowerCase() === title.toLocaleLowerCase()
      ).length > 0
    ) {
      alert("Tên công việc không được phép trùng");
      setTitle("");
      return;
    }

    if (title.trim()) {
      onAdd(title, priority);
      setTitle("");
      setPriority("medium");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        label="Công việc mới"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Thêm
      </Button>
    </form>
  );
};

export default TaskForm;
