import { useDispatch } from "react-redux";
import { decrease, increase, reset } from "../redux/slices/counter.slice";
import { useAppSelector } from "../hook/useRedux";
import { random } from "../redux/slices/random.slice";
import { isDark } from "../redux/slices/darkMode.slice";
import { changeDisplay } from "../redux/slices/displayCart.slice";

export default function Counter() {
  const res = useAppSelector((state) => state.counter.value);
  const arrRandom = useAppSelector((state) => state.random.value);
  const dark = useAppSelector((state) => state.dark.value);
  const mode = useAppSelector((state) => state.mode.value);

  const items = [1, 2, 3, 4];

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleRandom = () => {
    dispatch(random());
  };

  const handleDarkMode = () => {
    dispatch(isDark());
  };

  const handleDisplay = () => {
    dispatch(changeDisplay());
  };

  return (
    <div>
      <h3>{res}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <h3>List number: {JSON.stringify(arrRandom)}</h3>
      <button onClick={handleRandom}>Random number</button>
      <div>
        <div
          className={`w-[500px] h-[500px] flex justify-center items-center ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <button
            onClick={handleDarkMode}
            className={`${
              dark ? "bg-black text-white" : "!bg-white !text-black"
            }`}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center gap-4">
        <button onClick={handleDisplay} className="px-4 py-2 border rounded">
          {mode === "list" ? "List mode" : "Grid mode"}
        </button>

        <div
          className={`w-full max-w-md ${
            mode === "list"
              ? "flex flex-col gap-3"
              : "grid grid-cols-4 gap-3 place-items-center"
          }`}
        >
          {items.map((num) => (
            <div
              key={num}
              className="bg-red-500 text-white font-semibold flex justify-center items-center
                       w-full h-12 rounded shadow"
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
