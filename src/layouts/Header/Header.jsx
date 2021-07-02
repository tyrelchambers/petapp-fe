import React from "react";
import { H1 } from "../../components/Headings/Headings";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between py-2">
      <H1>PetAlert</H1>
      <div className="flex items-center">
        <Navbar />
        {props.children}
      </div>
    </header>
  );
};

export default Header;
