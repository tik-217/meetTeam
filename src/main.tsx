import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.scss";
import { MainRouting } from "./app/MainRouting.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRouting />
  </StrictMode>
);
