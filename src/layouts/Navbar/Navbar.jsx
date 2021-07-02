import React from "react";
import { Link } from "react-router-dom";
import { navbarRoutes } from "../../routes/navbar.routes";
const Navbar = () => {
  return (
    <nav>
      {navbarRoutes.map((route) => (
        <Link
          to={route.slug}
          className="py-1 px-4 text-gray-500 hover:text-gray-800 transition-all"
          key={route.label}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
