import type { ActionType, Student } from "../../utils/types";

const getLocal = localStorage.getItem("listStudent");

const initialStudent = getLocal ? JSON.parse(getLocal) : [];

const listStudentReducer = (
  state: Student[] = initialStudent,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      if (
        !("payload" in action) ||
        !action.payload ||
        typeof action.payload === "string"
      )
        return state;

      const newState = [...state, action.payload];

      localStorage.setItem("listStudent", JSON.stringify(newState));
      return newState;
    }
    case "DELETE_STUDENT": {
      if (!("payload" in action) || !action.payload) return state;

      const newState = state.filter((s) => s.id !== action.payload.id);

      localStorage.setItem("listStudent", JSON.stringify(newState));
      return newState;
    }
    case "SEARCH_STUDENT": {
      const studentClones = [...state];
      if (action.payload && typeof action.payload === "string") {
        const searchStudent = studentClones.filter((student) =>
          (student.name ?? "")
            .toLowerCase()
            .includes((action.payload ?? "").toLowerCase())
        );
        return searchStudent;
      } else {
        return initialStudent;
      }
    }

    default:
      break;
  }
  return state;
};

export default listStudentReducer;
