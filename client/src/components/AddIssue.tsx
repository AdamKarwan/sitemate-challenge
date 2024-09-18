import axios from "axios";
import React, { useState } from "react";

const AddIssue: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newIssue = {
      title,
      description,
      status,
    };

    axios
      .post("http://localhost:5000/issues/", newIssue)
      .then((res) => console.log(res.data));

    setTitle("");
    setDescription("");
    setStatus("");
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Create New Issue</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            placeholder="Title"
            type="text"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <input
            type="text"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value="Create Issue"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
};

export default AddIssue;
