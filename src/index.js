import React from "react";
import { render } from "react-dom";

function HolaMundo() {
  return <p>Hola Mundo</p>;
}

render(<HolaMundo />, document.getElementById("app"));
