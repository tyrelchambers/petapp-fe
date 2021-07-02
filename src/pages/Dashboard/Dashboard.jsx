import React from "react";
import DashboardNavbar from "../../layouts/DashboardNavbar/DashboardNavbar";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import * as Buttons from "../../components/Buttons/Buttons";

const Dashboard = () => {
  return (
    <Wrapper>
      <Header>
        <Buttons.Main>Register a pet</Buttons.Main>
      </Header>
      <DashboardNavbar />
    </Wrapper>
  );
};

export default Dashboard;
