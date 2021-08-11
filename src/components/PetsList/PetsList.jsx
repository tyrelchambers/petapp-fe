import React from "react";
import Pet from "../Pet/Pet";

const PetsList = ({ pets }) => {
  return (
    <section className="grid grid-cols-3 gap-4 mt-10">
      {pets.map((pet) => (
        <Pet pet={pet} key={pet.uuid} />
      ))}
    </section>
  );
};

export default PetsList;
