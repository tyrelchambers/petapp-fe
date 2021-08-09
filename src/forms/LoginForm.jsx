import React from "react";
import { Main } from "../components/Buttons/Buttons";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";

const LoginForm = () => {
  return (
    <form>
      <InputWrapper labelFor="email" labelTitle="Email">
        <Input type="email" name="email" placeholder="email@example.com" />
      </InputWrapper>
      <InputWrapper labelFor="password" labelTitle="Password">
        <Input type="password" name="password" placeholder="your password" />
      </InputWrapper>
      <div className="w-full flex justify-end">
        <Main>Login</Main>
      </div>
    </form>
  );
};

export default LoginForm;
