import React from "react";
import ReactDOM from "react-dom";

const firstname = "Lev";
const lastName = "Dzhepko";

ReactDOM.render(
  <div>
    <h1>
      Hello, {firstname} {lastName}:)
    </h1>
    <p>
      Your favourite number is <em>{Math.floor(Math.random() * 10)}</em>, right?
    </p>
  </div>,
  document.getElementById("root")
);
