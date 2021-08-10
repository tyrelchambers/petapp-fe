import { useQuery } from "react-query";
import { getPets } from "../../api/getPets";

export const usePets = () => {
  const info = useQuery("myPets", getPets);
  return info;
};
