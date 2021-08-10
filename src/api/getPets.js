import { request } from "../config/axios";

export const getPets = async () => {
  return await request.get("/pets/v1/me");
};
