import React from "react";
import "./styles.css";

import Greeting from "./Greeting";
import PI, { doublePi } from "./IE.js";

export default function App() {
  return (
    <div>
      <Greeting />
      <h1>{PI}</h1> {/* Default Export - which is Pi*/}
      <h1>{doublePi()}</h1> {/* Other Export - which is DoublePi*/}
    </div>
  );
}
