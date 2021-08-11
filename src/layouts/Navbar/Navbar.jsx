import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/queries/useUser";

const Navbar = () => {
  const { data } = useUser();
  return (
    <nav>
      <Link
        to="/"
        className="py-1 px-4 text-gray-500 hover:text-gray-800 transition-all"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="py-1 px-4 text-gray-500 hover:text-gray-800 transition-all"
      >
        About
      </Link>

      {!data ? (
        <Link
          to="/login"
          className="py-1 px-4 text-gray-500 hover:text-gray-800 transition-all"
        >
          Login
        </Link>
      ) : (
        <Link
          to="/signout"
          className="py-1 px-4 text-gray-500 hover:text-gray-800 transition-all"
        >
          Sign out
        </Link>
      )}

      {data && (
        <Link
          to="/dashboard"
          className="border-l-2 border-gray-300 py-1 px-4 text-gray-500 hover:text-gray-800 transition-all"
        >
          Dashboard
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
