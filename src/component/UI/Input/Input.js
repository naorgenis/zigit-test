import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="Input">
      <div className="mb-3">
        <label className="form-label">{props.config.placeholder}</label>
        <input
          className="InputElement"
          {...props.config}
          value={props.value}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default Input;
