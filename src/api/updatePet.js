import { request } from "../config/axios";

export const updatePet = (data) => {
  const { uuid, ...rest } = data;
  return request.put(`/pets/v1/${uuid}/update`, rest);
};
