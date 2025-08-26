import React, { useState } from "react";

export default function Toggle() {
  const [text, setText] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setText(!text)}>
        {text ? <span>An</span> : <span>Hien</span>}
      </button>
      <p style={{ display: text ? "flex" : "none" }}>Tieu de van ban</p>
    </div>
  );
}
