import { request } from "../config/axios";

export const getUser = () => {
  return request.get("/users/v1/me");
};
