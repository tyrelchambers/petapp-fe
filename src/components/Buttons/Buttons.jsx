import React from "react";
import "./styles.css";

export const Main = ({ type = "", children, className }) => {
  return (
    <button
      type={type}
      className={`btn main bg-green-300 shadow-md ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};
