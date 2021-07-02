import React from "react";
import { H1 } from "../../components/Headings/Headings";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2">
      <H1>PetAlert</H1>
      <Navbar />
    </header>
  );
};

export default Header;
