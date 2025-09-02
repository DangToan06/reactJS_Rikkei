import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timeValue, setTimeValue] = useState<number>(1);

  useEffect(() => {
    const timeId = setInterval(() => {
      setTimeValue((prev) => prev + 1);
      console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(timeId);
      console.log("Clear interval");
    };
  }, []);

  return (
    <div>
      <h1>Time: {timeValue}</h1>
    </div>
  );
}
