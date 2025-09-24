import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { getAllTask } from "../apis/task.api";

export default function TaskList() {
  const { data, error, status } = useAppSelector((store) => store.task);
  console.log(data, error, status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTask());
  }, []);

  return <div>TaskList</div>;
}
