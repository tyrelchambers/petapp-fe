import React from "react";
import "./styles.css";

export const Main = ({ type = "button", children, className, onClick }) => {
  return (
    <button
      type={type}
      className={`btn main text-white shadow-md ${className ? className : ""}`}
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
      className={`btn secondary bg-white hover:text-white ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
