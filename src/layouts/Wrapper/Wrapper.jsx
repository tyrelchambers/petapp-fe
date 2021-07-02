import React from "react";

const Wrapper = (props) => {
  return (
    <div className="max-w-screen-xl w-full ml-auto mr-auto p-4">
      {props.children}
    </div>
  );
};

export default Wrapper;
