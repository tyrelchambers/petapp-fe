import { useMutation, useQueryClient } from "react-query";
import { updatePet } from "../../api/updatePet";

export const useUpdatePet = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((data) => {
    queryClient.invalidateQueries("myPets");
    updatePet({ uuid: data.uuid, ...data });
  });
  return mutation;
};
