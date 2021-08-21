import React from "react";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Input from "../components/Input/Input";
import { Main } from "../components/Buttons/Buttons";

const NewContactForm = () => {
  return (
    <form className="max-w-2xl form flex flex-col mt-4">
      <div className="grid grid-cols-2 gap-4">
        <InputWrapper labelTitle="Name" labelFor="name">
          <Input placeholder="contact name" />
        </InputWrapper>
        <InputWrapper labelTitle="Phone Number" labelFor="phoneNumber">
          <Input placeholder="XXX-XXX-XXXX" type="tel" />
        </InputWrapper>
        <Main className="w-40">Save</Main>
      </div>
    </form>
  );
};

export default NewContactForm;
