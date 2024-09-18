import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Issue {
  _id: string;
  title: string;
  description: string;
}

const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/issues/")
      .then((response) => {
        console.log(response.data);
        setIssues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteIssue = (id: string) => {
    axios.delete("http://localhost:5000/issues/" + id).then((response) => {
      console.log(response.data);
    });

    setIssues(issues.filter((el) => el._id !== id));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Issue Tracker</h3>
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue._id}>
              <td className="border px-4 py-2">{issue.title}</td>
              <td className="border px-4 py-2">{issue.description}</td>
              <td className="border px-4 py-2">
                <Link to={"/update/" + issue._id} className="text-blue-500">
                  edit
                </Link>{" "}
                |{" "}
                <button
                  onClick={() => {
                    deleteIssue(issue._id);
                  }}
                  className="text-red-500"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueList;
