import React, { useReducer } from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { newPetReducer } from "../reducers/newPetReducer";
import "./styles.css";
import * as Buttons from "../components/Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewPetForm = () => {
  const [state, dispatch] = useReducer(newPetReducer, {
    name: "",
    breed: "",

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form className="mt-10 max-w-2xl form flex flex-col gap-4">
      <h2 className="text-xl text-gray-700  font-bold">Basic Information</h2>

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

      <h2 className="text-xl text-gray-700  font-bold">Vaccines</h2>
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
          <Input
            placeholder={`vaccine #${id + 1}`}
            value={state.type}
            className="h-full col-span-2"
            onChange={(e) => updateVaccine(id, "type", e.target.value)}
            name={`vaccine${id}_name`}
          />

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
      <Buttons.Secondary onClick={addVaccineHandler}>
        <FontAwesomeIcon icon={faPlus} className="mr-4" />
        Add Vaccine
      </Buttons.Secondary>

      <hr />

      <Buttons.Main onClick={(e) => submitHandler(e)}>Save</Buttons.Main>
    </form>
  );
};

export default NewPetForm;
