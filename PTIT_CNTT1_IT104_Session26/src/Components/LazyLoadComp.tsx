import React from "react";

export default function LazyLoadComp() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Nội dung Lazy Load</h2>
      <p>
        {Array(1000)
          .fill("Lorem ipsum dolor sit amet consectetur adipisicing elit. ")
          .join("")}
      </p>
    </div>
  );
}
