import { request } from "../config/axios";

export const newPet = (data) => {
  return request.post("/pets/v1/new", data);
};
