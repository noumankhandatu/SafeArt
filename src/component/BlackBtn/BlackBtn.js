import React from "react";
import "./BlackBtn.css";
const BlackBtn = (props) => {
  return (
    <button className="SpanWholeBtn">
      <span className="App__spanText">{props.text}</span>
    </button>
  );
};

export default BlackBtn;
