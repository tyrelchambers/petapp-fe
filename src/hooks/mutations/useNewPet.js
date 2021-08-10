import { useMutation } from "react-query";
import { newPet } from "../../api/newPet";
import { useNewQRCode } from "./useNewQRCode";
export const useNewPet = () => {
  const qrCode = useNewQRCode();
  const mutation = useMutation((data) => newPet(data), {
    onSuccess: (res) => {
      qrCode.mutate({ uuid: res.uuid });
    },
  });
  return mutation;
};
