import React, { useState } from "react";
import { useDeleteIssue } from "../../../hooks/useDeleteIssue";
import { Issue } from "../../../types/types";

interface DeleteIssueButtonProps {
  issue: Issue;
}

const DeleteIssueButton: React.FC<DeleteIssueButtonProps> = ({ issue }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync: deleteIssue } = useDeleteIssue();

  const handleDelete = async () => {
    await deleteIssue(issue._id);
    console.log(issue);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="bg-red-500/80 hover:bg-red-600 transition-all text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 min-w-96">Confirm Delete</h2>
            <p>Are you sure you want to delete this issue?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteIssueButton;
