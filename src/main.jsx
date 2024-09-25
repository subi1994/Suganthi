import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./Router";
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router/>
  </StrictMode>
);