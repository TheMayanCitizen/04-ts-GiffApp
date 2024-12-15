import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GiffApp } from "./GiffApp";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GiffApp />
  </StrictMode>
);
