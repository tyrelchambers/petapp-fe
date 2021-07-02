import React from "react";
import DashboardNavbar from "../../layouts/DashboardNavbar/DashboardNavbar";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import * as Buttons from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import { NEW_PET } from "../../routes/main.routes";
const Dashboard = () => {
  return (
    <Wrapper>
      <Header>
        <Link
          to={NEW_PET}
          className="px-4 py-2 bg-indigo-500 rounded-md shadow-md text-base text-white"
        >
          Register a pet
        </Link>
      </Header>
      <DashboardNavbar />
    </Wrapper>
  );
};

export default Dashboard;
