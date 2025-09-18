import type ITask from "../../interface/task.interface";

type ActionType = {
  type: string;
  payload?: ITask | { id: number };
};

// const taskDemo = [
//   { id: 1, nameTask: "Quét nhà", leverTask: 1, status: true },
//   { id: 2, nameTask: "Rửa bát", leverTask: 2, status: false },
//   { id: 3, nameTask: "Nấu cơm", leverTask: 3, status: true },
//   { id: 4, nameTask: "Giặt quần áo", leverTask: 1, status: false },
//   { id: 5, nameTask: "Đi chợ", leverTask: 2, status: true },
//   { id: 6, nameTask: "Lau bàn", leverTask: 1, status: false },
//   { id: 7, nameTask: "Tưới cây", leverTask: 2, status: true },
//   { id: 8, nameTask: "Cho mèo ăn", leverTask: 1, status: false },
//   { id: 9, nameTask: "Đổ rác", leverTask: 2, status: true },
//   { id: 10, nameTask: "Học bài", leverTask: 3, status: false },
// ];

// localStorage.setItem("listTask", JSON.stringify(taskDemo));

const data: ITask[] = JSON.parse(localStorage.getItem("listTask") || "[]");

const listTaskReducer = (state = data, action: ActionType): ITask[] => {
  switch (action.type) {
    case "ADD_TASK": {
      if (!("payload" in action) || !action.payload) return state;
      const newState = [...state, action.payload as ITask];
      localStorage.setItem("listTask", JSON.stringify(newState));
      return newState;
    }

    case "DELETE_TASK": {
      if (!("payload" in action) || !action.payload) return state;
      const newState = state.filter(
        (task) => task.id !== (action.payload as ITask).id
      );
      localStorage.setItem("listTask", JSON.stringify(newState));
      return newState;
    }

    case "DELETE_ALL": {
      const newState: ITask[] = [];
      localStorage.setItem("listTask", JSON.stringify(newState));
      return newState;
    }

    case "TOGGLE_STATUS": {
      const newState = state.map((task) =>
        task.id === action.payload?.id
          ? { ...task, status: !task.status }
          : task
      );
      localStorage.setItem("listTask", JSON.stringify(newState));
      return newState;
    }
    case "COMPLETE_ALL": {
      const newState = state.map((task) => ({ ...task, status: true }));
      localStorage.setItem("listTask", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};

export default listTaskReducer;
