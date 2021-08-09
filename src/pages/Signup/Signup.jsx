import React from "react";
import { H1 } from "../../components/Headings/Headings";
import SignupForm from "../../forms/SignupForm";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Signup = () => {
  return (
    <Wrapper>
      <div className="w-full max-w-lg ml-auto mr-auto mt-20">
        <H1>Sign up</H1>
        <SignupForm />
      </div>
    </Wrapper>
  );
};

export default Signup;
