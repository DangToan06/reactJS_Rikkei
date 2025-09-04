import React, { useEffect, useRef, useState } from "react";

// let timerId: ReturnType<typeof setInterval>;

export default function UseRef() {
  const headingRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  //   const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(0);
  const [time, setTime] = useState<number>(0);

  let timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Tham chieu 1 phan tu trong DOM

  console.log("handing ref:", headingRef.current);
  console.log("Input ref: ", inputRef.current);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  //Luu tru gia tri bien klkhong gay ra viec render
  const handleCount = (): void => {
    // setCount((prev) => prev + 1); // moi lan tang gay re-render ton tai nguyen
    countRef.current++;
    console.log("click: ", countRef.current);
  };

  //Luu tru gia tri cua cac bien or ham ma muon duoc truy cap tu nhieu vij tri trong component

  const handleStart = (): void => {
    timerIdRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const handleEnd = (): void => {
    if (timerIdRef.current) clearInterval(timerIdRef.current);
  };

  return (
    <div>
      <h1 ref={headingRef}>Heading1</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleCount}>Count</button>

      <hr />
      <h1>Timer: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
    </div>
  );
}
