import React from "react";
import { H1 } from "../../components/Headings/Headings";
import LoginForm from "../../forms/LoginForm";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Login = () => {
  return (
    <Wrapper>
      <div className="w-full max-w-lg ml-auto mr-auto mt-20">
        <H1>Login</H1>
        <LoginForm />
      </div>
    </Wrapper>
  );
};

export default Login;
