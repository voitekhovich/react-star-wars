import React from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import App from "@containers/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
