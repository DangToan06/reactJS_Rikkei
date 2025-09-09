// import UseStateDemo from "./components/UseStateDemo";

// import UseReducer from "./components/UseReducer";

// import UseRef from "./components/UseRef";

// import { useState } from "react";
// import UseEffect from "./components/UseEffect";
import "antd/dist/reset.css";
import Index from "./components/LuyenTap/Index";
import "./App.css";

function App() {
  // const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      {/* <UseStateDemo /> */}

      {/* <div>
        <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      </div>
      {isShow && <UseEffect />} */}

      {/* <UseRef /> */}

      {/* <UseReducer /> */}
      <Index />
    </>
  );
}

export default App;
