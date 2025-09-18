import { combineReducers } from "redux";
import counterReducer from "./Counter.reducer";
import randomReducer from "./Random.reducer";
import listTaskReducer from "./ListTask.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  random: randomReducer,
  tasks: listTaskReducer,
});

export default rootReducer;
