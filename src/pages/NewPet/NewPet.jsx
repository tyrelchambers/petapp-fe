import React from "react";
import { H1 } from "../../components/Headings/Headings";
import NewPetForm from "../../forms/NewPetForm";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import "./styles.css";
const NewPet = () => {
  return (
    <Wrapper>
      <Header />

      <main className="mt-10">
        <H1>Register a pet</H1>
        <NewPetForm />
      </main>
    </Wrapper>
  );
};

export default NewPet;
