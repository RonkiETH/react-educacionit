import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PrimerComponente } from "./PrimerComponente";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente />
    <SegundoComponente />
    <TercerComponente />
  </React.StrictMode>
);
