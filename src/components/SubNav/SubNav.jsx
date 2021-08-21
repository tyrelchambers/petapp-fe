import React from "react";
import { Link } from "react-router-dom";
import "./SubNav.css";

const SubNav = ({ tabs, tab }) => {
  return (
    <nav className="mb-8 w-full">
      <ul className="flex items-center  subnav">
        {tabs.map((t) => (
          <li
            key={t.label}
            className={`rounded-md px-4 py-1 subnav__item ${
              tab === t.label.toLowerCase() ? "active" : ""
            }`}
          >
            <Link to={t.slug}>{t.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
