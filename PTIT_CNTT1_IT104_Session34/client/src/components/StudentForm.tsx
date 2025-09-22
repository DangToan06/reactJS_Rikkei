import { Button, MenuItem, Select, TextField } from "@mui/material";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { Student } from "../utils/types";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
}

const schema = Yup.object({
  id: Yup.string().required("Mã sinh viên không được để trống"),
  name: Yup.string().required("Tên không được để trống"),
  age: Yup.number()
    .typeError("Tuổi phải là số")
    .min(18, "Phải >= 18 tuổi")
    .max(30, "Phải <= 30 tuổi")
    .required("Tuổi bắt buộc"),
  gender: Yup.string()
    .oneOf(["Nam", "Nữ"], "Giới tính không hợp lệ")
    .required("Giới tính bắt buộc"),
  birthday: Yup.string()
    .required("Ngày sinh bắt buộc")
    .test(
      "not-in-future",
      "Ngày sinh không được lớn hơn ngày hiện tại",
      (value) => {
        if (!value) return false;
        return new Date(value) <= new Date();
      }
    ),
  hometown: Yup.string().required("Quê quán bắt buộc"),
  address: Yup.string().required("Địa chỉ bắt buộc"),
});

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Student>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    },
  });

  const onSubmitForm = (data: Student) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-1/3 p-4 border rounded-xl shadow"
    >
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          {...register("id")}
          error={!!errors.id}
          helperText={errors.id?.message}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />
        <TextField
          label="Tuổi"
          type="number"
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
          fullWidth
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select {...field} fullWidth>
              <MenuItem value="Nam">Nam</MenuItem>
              <MenuItem value="Nữ">Nữ</MenuItem>
            </Select>
          )}
        />

        <TextField
          type="date"
          label="Ngày sinh"
          InputLabelProps={{ shrink: true }}
          {...register("birthday")}
          error={!!errors.birthday}
          helperText={errors.birthday?.message}
          fullWidth
        />
        <TextField
          label="Nơi sinh"
          {...register("hometown")}
          error={!!errors.hometown}
          helperText={errors.hometown?.message}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
          fullWidth
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
