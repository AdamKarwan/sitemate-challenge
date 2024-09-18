import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import AddIssue from "./components/AddIssue";
import IssueList from "./components/IssueList";
import UpdateIssue from "./components/UpdateIssue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/add" element={<AddIssue />} />
        <Route path="/update/:id" element={<UpdateIssue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
