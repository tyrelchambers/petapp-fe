import React from "react";
import "./styles.css";

const InputWrapper = ({ labelFor, labelTitle, children, className }) => {
  return (
    <div className={`input-wrapper ${className ? className : ""}`}>
      <label htmlFor={labelFor} className="input-wrapper__label">
        {labelTitle}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
