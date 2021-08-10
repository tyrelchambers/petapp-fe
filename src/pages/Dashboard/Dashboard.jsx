import React from "react";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { NEW_PET } from "../../routes/main.routes";
import "./Dashboard.css";
import cat1 from "../../assets/undraw_Playful_cat_re_bxiu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faPaw, faPlus } from "@fortawesome/free-solid-svg-icons";
import Block from "../../components/Block/Block";
import DashHero from "../../layouts/DashHero/DashHero";
const Dashboard = () => {
  return (
    <Wrapper>
      <DashHero
        left={
          <>
            <p className="text-5xl font-bold text-white">
              Welcome to PetAlert!
            </p>
            <Link
              to={NEW_PET}
              className="btn main mt-4 inline-block text-white rounded-full text-2xl"
            >
              Register a pet
            </Link>
          </>
        }
        right={<img src={cat1} className="w-1/2 object-cover" alt="" />}
      />

      <section className="grid grid-cols-3 gap-8 mt-10">
        <Block type="yellow">
          <FontAwesomeIcon icon={faIdCard} className="text-2xl text-gray-700" />
          <p className="text-lg text-gray-700">Review your contact info</p>
        </Block>

        <Link to="/pets">
          <Block type="liliac">
            <FontAwesomeIcon icon={faPaw} className="text-2xl text-gray-700" />
            <p className="text-lg text-gray-700">View your registered pets</p>
          </Block>
        </Link>

        <Link to="/pet/new">
          <Block type="red">
            <FontAwesomeIcon icon={faPlus} className="text-2xl text-gray-700" />
            <p className="text-lg text-gray-700">Register a pet</p>
          </Block>
        </Link>
      </section>
    </Wrapper>
  );
};

export default Dashboard;
