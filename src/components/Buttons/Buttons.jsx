import React from "react";
import "./styles.css";

export const Main = ({ type = "button", children, className, onClick }) => {
  return (
    <button
      type={type}
      className={`btn main bg-indigo-500 text-white shadow-md ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Secondary = ({
  type = "button",
  children,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`btn secondary bg-white text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
