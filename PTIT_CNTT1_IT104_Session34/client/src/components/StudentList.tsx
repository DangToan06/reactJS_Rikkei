import {
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import type { Student } from "../utils/types";
import { useAppDispatch } from "../hook/useRedux";

interface StudentListProps {
  students: Student[];
  openEdit: (student: Student) => void;
}

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StudentList: React.FC<StudentListProps> = ({ students, openEdit }) => {
  const [open, setOpen] = React.useState(false);
  const [studentNow, setStudentNow] = useState<Student | null>(null);
  const handleOpen = (s: Student) => {
    setStudentNow(s);
    setOpen(true);
  };
  const handleClose = () => {
    setStudentNow(null);
    setOpen(false);
  };
  const dispatch = useAppDispatch();

  const onDelete = () => {
    if (studentNow) {
      dispatch({ type: "DELETE_STUDENT", payload: studentNow });
      setOpen(false);
    }
  };

  return (
    <TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="flex justify-between items-center"
          >
            <span>Confirm delete</span>
            <span className="cursor-pointer" onClick={handleClose}>
              <CloseIcon></CloseIcon>
            </span>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="flex gap-1 items-center text-red-700"
          >
            <DangerousIcon></DangerousIcon>
            <span>Do you want delete ?</span>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="flex gap-4 justify-end"
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={onDelete}>
              OK
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((s, i) => (
            <TableRow key={s.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.age}</TableCell>
              <TableCell>{s.gender}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="contained" color="error">
                    Xem
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => openEdit(s)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleOpen(s)}
                  >
                    Xóa
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
