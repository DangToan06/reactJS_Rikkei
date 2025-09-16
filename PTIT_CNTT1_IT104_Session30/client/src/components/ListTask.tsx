import { Checkbox, List } from "antd";
import ModalDelete from "./ModalDelete";
import axios from "axios";
import ModalEdit from "./ModalEdit";

interface Task {
  id: number;
  task: string;
  status: boolean;
}

type PropsType = {
  tasks: Task[];
  getAllTask: () => void;
};

export default function ListTask({ getAllTask, tasks }: PropsType) {
  console.log(tasks);
  const handleChangeStatus = async (task: Task) => {
    try {
      await axios.patch(`http://localhost:3000/Todos/${task.id}`, {
        status: !task.status,
      });
      getAllTask();
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };

  return (
    <List
      style={{ padding: "10px 20px" }}
      dataSource={tasks}
      renderItem={(t) => (
        <List.Item
          style={{
            backgroundColor: "#fff",
            marginBottom: "8px",
            borderRadius: "8px",
            border: "1px solid #f0f0f0",
            padding: "12px 16px",
            boxShadow: "-6px 10px 25px -6px rgba(0,0,0,0.15)",
          }}
          actions={[
            <ModalEdit taskNow={t} onEdit={getAllTask}></ModalEdit>,
            <ModalDelete task={t} onDelete={getAllTask}></ModalDelete>,
          ]}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            {t.status ? (
              <Checkbox
                checked
                style={{ marginRight: "12px" }}
                onChange={() => handleChangeStatus(t)}
              />
            ) : (
              <Checkbox
                style={{ marginRight: "12px" }}
                onChange={() => handleChangeStatus(t)}
              />
            )}

            <span
              style={{
                textDecoration: t.status ? "line-through" : "none",
                color: t.status ? "#999" : "#000",
                flex: 1,
              }}
            >
              {t.task}
            </span>
          </div>
        </List.Item>
      )}
    />
  );
}
