import { Suspense } from "react";

import React from "react";

const LazyLoadComp = React.lazy(() => import("./Components/LazyLoadComp"));

function App() {
  return (
    <>
      <div>
        <h1>Demo Lazy Loading với Suspense</h1>

        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  border: "5px solid #ccc",
                  borderTop: "5px solid #333",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto",
                }}
              />
              <p>Đang tải...</p>
            </div>
          }
        >
          <LazyLoadComp />
        </Suspense>

        <style>
          {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
        </style>
      </div>
    </>
  );
}

export default App;
