import React from "react";
import "./pet.css";

const Pet = ({ pet }) => {
  return (
    <div className="pet-wrapper flex gap-4 ">
      <img src={pet.qrCode} alt="" />

      <div className="flex flex-col">
        <p className="text-2xl font-bold">{pet.name}</p>
        <p>{pet.breed}</p>
      </div>
    </div>
  );
};

export default Pet;
