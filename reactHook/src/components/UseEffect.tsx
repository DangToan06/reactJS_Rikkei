import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  // callBack được gọi mõi khi re-render(co bat ky thay doi nao o giao dien thi se duoc goi lai)
  useEffect(() => {
    console.log("call back duoc goi");
    document.title = title;
  });

  //   callBack duoc goi 1 lan duy nhat khi vua duoc mount (thuong duoc dung khi goi api)
  //   useEffect(() => {
  //     console.log("call back duoc goi 2");
  //   }, []);

  // callBack duoc goi khi dependencies thay doi
  //   useEffect(() => {
  //     console.log("call back duoc goi 3");
  //   }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <h1>Demo useEffect</h1>
    </div>
  );
}
