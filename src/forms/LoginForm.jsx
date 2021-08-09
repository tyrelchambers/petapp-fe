import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Main } from "../components/Buttons/Buttons";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useLogin } from "../hooks/mutations/useLogin";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const login = useLogin();

  const submitHandler = (e) => {
    e.preventDefault();
    login.mutate(state);
  };

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <InputWrapper labelFor="email" labelTitle="Email">
        <Input
          type="email"
          name="email"
          placeholder="email@example.com"
          value={state.email}
          onChange={inputHandler}
        />
      </InputWrapper>
      <InputWrapper labelFor="password" labelTitle="Password">
        <Input
          type="password"
          name="password"
          placeholder="your password"
          value={state.password}
          onChange={inputHandler}
        />
      </InputWrapper>
      <div className="w-full flex justify-end">
        <Main className="w-full" onClick={submitHandler}>
          Login
        </Main>
      </div>
      <Link to="/signup" className="text-blue-500 mt-4 block underline">
        Don't have an account? Sign up!
      </Link>
    </form>
  );
};

export default LoginForm;
