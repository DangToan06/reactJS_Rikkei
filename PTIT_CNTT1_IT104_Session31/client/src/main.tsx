import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>
);
