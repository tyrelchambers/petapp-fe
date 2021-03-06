export const newPetReducer = (state, action) => {
  switch (action.type) {
    case "add vaccine": {
      const clone = {
        ...state,
        vaccines: [
          ...state.vaccines,
          {
            type: "",
            administered: null,
            expiry: null,
          },
        ],
      };

      return clone;
    }

    case "update vaccine": {
      const clone = {
        ...state,
      };

      const { id, key, value } = action.data;

      clone.vaccines[id][key] = value;

      return clone;
    }

    case "remove vaccine": {
      const clone = {
        ...state,
      };

      const { id } = action.data;
      const newVaccs = clone.vaccines.filter((v, i) => i !== id);
      clone.vaccines = newVaccs;
      return clone;
    }

    case "update input": {
      const clone = {
        ...state,
      };

      const { key, value } = action.data;
      clone[key] = value;
      return clone;
    }
    default:
      break;
  }
};
