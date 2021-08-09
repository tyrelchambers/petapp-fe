import { useQuery } from "react-query";
import { getUser } from "../../api/getUser";

export const useUser = () => {
  const token = window.localStorage.getItem("token");

  const info = useQuery("currentuser", getUser, {
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });

  return info;
};
