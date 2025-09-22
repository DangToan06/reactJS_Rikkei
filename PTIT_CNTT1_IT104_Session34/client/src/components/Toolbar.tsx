import { Button, TextField, type ToolbarProps } from "@mui/material";

import React from "react";
import { useAppDispatch } from "../hook/useRedux";

const Toolbar: React.FC<ToolbarProps> = () => {
  const [keyword, setKeyword] = React.useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch({
      type: "SEARCH_STUDENT",
      payload: keyword,
    });
  };

  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary">
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Search Here"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Tìm kiếm
        </Button>
        <Button variant="outlined">Sắp xếp</Button>
      </div>
    </div>
  );
};

export default Toolbar;
