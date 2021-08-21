import React from "react";
import { H1, H2 } from "../../components/Headings/Headings";
import NewContactForm from "../../forms/NewContactForm";

const Contacts = () => {
  return (
    <>
      <H1>Contacts</H1>
      <hr />
      <H2>Add Contact</H2>
      <p>
        Contacts can be displayed on your pet's profile page. If they are lost
        then found, your contact will be able to be reached.
      </p>
      <NewContactForm />
    </>
  );
};

export default Contacts;
