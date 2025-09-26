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
// import { useDispatch } from "react-redux";
// import { getTaskDetail } from "../redux/slices/task.slice";

interface TaskFormProps {
  onAdd: (title: string, priority: "low" | "medium" | "high") => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const { data: tasks } = useAppSelector((store) => store.tasks);
  const [touched, setTouched] = useState(false);
  const { task } = useAppSelector((store) => store.tasks);
  // const [taskUpdate, setTaskUpdate] = useState<TaskI | null>(null);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  // useEffect(() => {
  //   setInputValue(task?.name || "");
  // }, [idTaskUpdate]);

  // const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
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
        label={
          title.trim() === ""
            ? "Công việc không được để trống"
            : "Công việc mới"
        }
        variant="outlined"
        size="small"
        value={title}
        // error={title.trim() === ""}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        onBlur={() => setTouched(true)}
        error={touched && title.trim() === ""}
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

      <Button
        type="submit"
        variant="contained"
        color="primary"
        // onClick={() => dispatch(getTaskDetail(null))}
      >
        {task ? "Cập nhật" : "Thêm"}
      </Button>
    </form>
  );
};

export default TaskForm;
