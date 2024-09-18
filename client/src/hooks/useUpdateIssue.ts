import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Issue } from "../types/types";

const updateIssue = async (issue: Issue) => {
  const response = await axios.put(
    `http://localhost:5000/issues/${issue._id}`,
    issue
  );
  return response.data;
};

export const useUpdateIssue = () => {
  const queryClient = useQueryClient();

  return useMutation(updateIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries("issues");
    },
  });
};
