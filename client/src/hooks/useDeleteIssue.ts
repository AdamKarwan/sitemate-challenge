import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteIssue = async (id: string) => {
  const response = await axios.delete(`http://localhost:5000/issues/${id}`);
  return response.data;
};

export const useDeleteIssue = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries("issues");
    },
  });
};
