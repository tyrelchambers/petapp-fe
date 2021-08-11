import React from "react";
import { H1 } from "../../components/Headings/Headings";
import NewPetForm from "../../forms/NewPetForm";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import "./styles.css";
const NewPet = () => {
  return (
    <Wrapper>
      <main className="mt-10">
        <H1>Register a pet</H1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Fill out the information below to register your pet. A QR code will be
          generated for you. In case your lost pet is found and brought to a vet
          or animal hospital, the information here could help them tend to your
          pet.
        </p>
        <NewPetForm />
      </main>
    </Wrapper>
  );
};

export default NewPet;
