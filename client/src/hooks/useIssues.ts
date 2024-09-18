import axios from "axios";
import { useQuery } from "react-query";
import { Issue } from "../types/types";

export const useIssues = () => {
  // use react query to fetch issues via axios
  const issuesQuery = useQuery<Issue[]>("issues", async () => {
    const { data } = await axios.get("http://localhost:5000/issues/");
    return data;
  });
  return issuesQuery;
};
