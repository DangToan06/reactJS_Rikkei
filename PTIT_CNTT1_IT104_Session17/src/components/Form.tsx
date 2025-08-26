import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
    </div>
  );
}
