import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Secondary } from "../Buttons/Buttons";
import "./search.css";
const Search = () => {
  return (
    <div className="search shadow-lg rounded-full max-w-md flex items-center p-2 w-full">
      <FontAwesomeIcon icon={faSearch} className="ml-4 mr-4 text-white" />
      <input
        type="text"
        name="search"
        className="w-full bg-transparent placeholder-current text-white"
        placeholder="Search for a pet by QR Number"
      />
      <Secondary>Search</Secondary>
    </div>
  );
};

export default Search;
