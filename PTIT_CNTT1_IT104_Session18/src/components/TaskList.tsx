import TaskItem from "./TaskItem";

export default function TaskList() {
  // Lay gia tri tu context thong qua useContext
  // const { tasks } = useContext(TaskContext);

  return (
    <>
      <ul className="list-group my-3">
        <TaskItem />;
      </ul>
    </>
  );
}
