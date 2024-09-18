import React from "react";
import AddIssueButton from "./components/AddIssueButton";
import IssueList from "./components/IssueList";

const Issues: React.FC = () => {
  return (
    <main className="bg-gray-700 min-h-screen flex flex-col items-center justify-center p-4">
      <section className="w-full max-w-screen-lg bg-white rounded-lg shadow-md p-6">
        <header className="text-center mb-4">
          <h3 className="text-2xl font-bold">Issue Tracker</h3>
        </header>

        <IssueList />
        <div className="w-full mt-2 flex items-center">
          <AddIssueButton className="w-full" />
        </div>
      </section>
    </main>
  );
};

export default Issues;
