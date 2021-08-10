import { useMutation, useQueryClient } from "react-query";
import { generateQRCode } from "../../api/generateQRCode";
import { useUpdatePet } from "./useUpdatePet";
import { useHistory } from "react-router-dom";
export const useNewQRCode = () => {
  const queryClient = useQueryClient();
  const updatePet = useUpdatePet();
  const history = useHistory();
  const mutation = useMutation((data) => generateQRCode(data), {
    onSuccess: (res) => {
      queryClient.invalidateQueries("myPets");
      updatePet.mutate({ uuid: res.petId, qrCode: res.qr });
      history.push("/dashboard");
    },
  });
  return mutation;
};
