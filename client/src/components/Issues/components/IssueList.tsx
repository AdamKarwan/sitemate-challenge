import { useIssues } from "../../../hooks/useIssues";
import DeleteIssueButton from "./DeleteIssueButton";
import UpdateIssueButton from "./UpdateIssueButton";

const IssueList = () => {
  const { data: issues } = useIssues();
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="py-2">Title</th>
          <th className="py-2">Description</th>
          <th className="py-2 w-1 whitespace-nowrap">Actions</th>
        </tr>
      </thead>
      <tbody>
        {issues?.map((issue) => (
          <tr key={issue._id} className="h-full">
            <td className="border px-4 py-2">{issue.title}</td>
            <td className="border px-4 py-2">{issue.description}</td>
            <td className="border px-4 py-2 gap-2">
              <div className="flex gap-2">
                <UpdateIssueButton issue={issue} />
                <DeleteIssueButton issue={issue} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IssueList;
