import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Main } from "../components/Buttons/Buttons";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useSignup } from "../hooks/mutations/useSignup";

const SignupForm = () => {
  const [state, setState] = useState();
  const signup = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    signup.mutate(state);
  };

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-10">
      <InputWrapper labelFor="email" labelTitle="Email">
        <Input
          placeholder="email@example.com"
          type="email"
          name="email"
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>

      <InputWrapper labelFor="password" labelTitle="Password">
        <Input
          placeholder="Your password"
          type="password"
          name="password"
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>

      <InputWrapper labelFor="confirmPassword" labelTitle="Confirm Password">
        <Input
          placeholder="Confirm your password"
          type="password"
          name="confirmPassword"
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>
      <Main className="w-full" onClick={submitHandler}>
        Sign up
      </Main>
      <div className="mt-4">
        <Link to="/login" className="text-blue-500 underline">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
