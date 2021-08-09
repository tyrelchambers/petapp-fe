import { useMutation, useQueryClient } from "react-query";
import { login } from "../../api/login";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((data) => login(data), {
    onSuccess: (res) => {
      queryClient.invalidateQueries("currentUser");
      window.localStorage.setItem("token", res.token);
      window.location.pathname = "/dashboard";
    },
  });
  return mutation;
};
