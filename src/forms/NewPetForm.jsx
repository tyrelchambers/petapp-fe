import React, { useReducer } from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { newPetReducer } from "../reducers/newPetReducer";
import "./styles.css";
import * as Buttons from "../components/Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { H2 } from "../components/Headings/Headings";
import { generateQRCode } from "../api/generateQRCode";

const NewPetForm = () => {
  const [state, dispatch] = useReducer(newPetReducer, {
    name: "",
    breed: "",
    home: "",
    contacts: [],
    vaccines: [],
  });

  const addVaccineHandler = () => {
    dispatch({ type: "add vaccine" });
  };

  const inputHandler = (e) => {
    dispatch({
      type: "update input",
      data: {
        key: e.target.name,
        value: e.target.value,
      },
    });
  };

  const updateVaccine = (id, key, value) => {
    dispatch({
      type: "update vaccine",
      data: {
        id,
        key,
        value,
      },
    });
  };
  const removeVaccine = (id) => {
    dispatch({
      type: "remove vaccine",
      data: {
        id,
      },
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    generateQRCode(state);
  };
  return (
    <form className="mt-10 max-w-2xl form flex flex-col bg-white  rounded-lg">
      <H2>Basic Information</H2>

      <InputWrapper labelFor="name" labelTitle="Pet's name">
        <Input
          placeholder="Jimminie"
          name="name"
          value={state.name}
          onChange={(e) => inputHandler(e)}
        />
      </InputWrapper>

      <InputWrapper labelFor="breed" labelTitle="Pet's breed">
        <Input placeholder="what breed is your pet?" name="breed" />
      </InputWrapper>

      <InputWrapper labelFor="home" labelTitle="Pet's home">
        <Input placeholder="where does your pet live?" name="home" />
      </InputWrapper>

      <InputWrapper labelFor="contacts" labelTitle="Contact information">
        <Input
          placeholder="Who should be contacted if they're lost?"
          name="contacts"
        />
      </InputWrapper>

      <H2>Vaccines</H2>
      <div className="grid grid-cols-4 gap-4">
        <p className="col-span-2 blue-gray">Type</p>
        <p className="blue-gray">Administed</p>
        <p className="blue-gray">Expiry</p>
      </div>
      {state.vaccines.map((vac, id) => (
        <div
          className="grid grid-cols-4 gap-4 w-full h-10"
          key={`vaccine_${id}`}
        >
          <div className="col-span-2 flex items-center delete-wrapper">
            <FontAwesomeIcon
              icon={faTrash}
              className="mr-6 delete-vaccine"
              onClick={() => removeVaccine(id)}
            />
            <Input
              placeholder={`vaccine #${id + 1}`}
              value={state.type}
              className="h-full w-full"
              onChange={(e) => updateVaccine(id, "type", e.target.value)}
              name={`vaccine${id}_name`}
            />
          </div>

          <input
            type="date"
            className="form__date h-full"
            value={state.administered}
            name={`vaccine${id}_administered`}
            onChange={(e) => updateVaccine(id, "administered", e.target.value)}
          />

          <input
            type="date"
            className="form__date h-full"
            value={state.expiry}
            name={`vaccine${id}_expiry`}
            onChange={(e) => updateVaccine(id, "expiry", e.target.value)}
          />
        </div>
      ))}
      <Buttons.Secondary className="mt-4" onClick={addVaccineHandler}>
        <FontAwesomeIcon icon={faPlus} className="mr-4" />
        Add Vaccine
      </Buttons.Secondary>

      <hr className="mt-4" />

      <Buttons.Main className="mt-4" onClick={(e) => submitHandler(e)}>
        Save
      </Buttons.Main>
    </form>
  );
};

export default NewPetForm;
