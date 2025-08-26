import React, { useState } from "react";

export default function CounText() {
  const [inputArea, setInputArea] = useState("");

  return (
    <div>
      <textarea onChange={(e) => setInputArea(e.target.value)}></textarea>
      <p>So ky tu: {inputArea.length}</p>
    </div>
  );
}
