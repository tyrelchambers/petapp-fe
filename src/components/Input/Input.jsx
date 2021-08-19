import React from "react";
import "./styles.css";

const Input = (props) => {
  const { className, ...rest } = props;
  return (
    <input
      className={`bg-gray-100 p-2 px-3 rounded-md text-gray-700 h-full flex-1 ${
        className ? className : ""
      }`}
      {...rest}
    />
  );
};

export default Input;
