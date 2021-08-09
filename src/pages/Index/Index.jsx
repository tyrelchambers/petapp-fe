import React from "react";
import "./styles.css";
import { H1 } from "../../components/Headings/Headings";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import Search from "../../components/Search/Search";
const Index = () => {
  return (
    <Wrapper>
      <div className="w-full flex items-center flex-col max-w-2xl ml-auto mr-auto mt-20">
        <H1 className="mb-10 text-center text-4xl">
          We help you take care of your pets. Because after all, they're family.
        </H1>
        <Search />
      </div>
    </Wrapper>
  );
};

export default Index;
