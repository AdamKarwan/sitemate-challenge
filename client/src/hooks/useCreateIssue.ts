import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Issue } from "../types/types";

const createIssue = async (issue: Omit<Issue, "_id">) => {
  const response = await axios.post(`http://localhost:5000/issues/`, issue);
  return response.data;
};

export const useCreateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation(createIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries("issues");
    },
  });
};
