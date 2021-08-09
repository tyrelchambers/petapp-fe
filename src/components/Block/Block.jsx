import React from "react";
import "./block.css";

const Block = (props) => {
  return (
    <div
      className={`block ${props.type} shadow-lg p-8 rounded-3xl flex items-center gap-4 justify-center`}
    >
      {props.children}
    </div>
  );
};

export default Block;
