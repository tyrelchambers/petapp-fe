import React from "react";
import Pet from "../Pet/Pet";

const PetsList = ({ pets }) => {
  return (
    <section>
      {pets.map((pet) => (
        <Pet pet={pet} />
      ))}
    </section>
  );
};

export default PetsList;
