import "./App.css";

import Counter from "./components/Counter";
import Menu from "./components/Menu";

// import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="flex">
        <Menu></Menu>
        <Counter></Counter>
      </div>

      {/* <TaskList></TaskList> */}
    </>
  );
}

export default App;
