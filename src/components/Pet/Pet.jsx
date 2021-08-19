import React from "react";
import "./pet.css";

const Pet = ({ pet }) => {
  return (
    <div className="pet-wrapper flex gap-4 w-full">
      <div className="pet-avatar bg-gray-100 rounded-md"></div>

      <div className="flex flex-col">
        <p className="text-2xl font-bold pet-name">{pet.name}</p>
        <p>{pet.breed}</p>
      </div>
    </div>
  );
};

export default Pet;
