import React from "react";
import { Link } from "react-router-dom";
import { dashboardRoutes } from "../../routes/dashboard.routes";
import "./styles.css";
const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar flex item-center mt-4 gap-4">
      {dashboardRoutes.map((route) => (
        <Link
          to={route.slug}
          className="p-4 flex gap-2 rounded-lg bg-gray-100 items-center text-gray-600"
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNavbar;
