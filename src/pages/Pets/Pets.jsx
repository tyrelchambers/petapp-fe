import React from "react";
import { H1 } from "../../components/Headings/Headings";
import PetsList from "../../components/PetsList/PetsList";
import { usePets } from "../../hooks/queries/usePets";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Pets = () => {
  const { isLoading, data } = usePets();

  return (
    <Wrapper>
      <div className="flex items-center w-full mt-10">
        <H1 className="text-5xl font-bold">
          Here are all your wonderful pets!
        </H1>
      </div>

      {!isLoading && <PetsList pets={data} />}
    </Wrapper>
  );
};

export default Pets;
