import { request } from "../config/axios";

export const signup = (data) => {
  return request.post("/auth/v1/register", data);
};
