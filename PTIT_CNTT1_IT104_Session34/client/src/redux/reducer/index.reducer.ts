import { combineReducers } from "redux";
import listStudentReducer from "./student.reducer";

const rootReducer = combineReducers({
  studentReducer: listStudentReducer,
});

export default rootReducer;
