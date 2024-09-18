import Issue from "../models/Issue.js";

export const createIssueHandler = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newIssue = new Issue({ title, description });

  newIssue
    .save()
    .then((issue) => {
      // log the created issue to console
      console.log("successfully created", issue);
      // return a response to the client
      res.json("Issue added!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getIssuesHandler = (req, res) => {
  // return all issues
  Issue.find()
    .then((issues) => res.json(issues))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getIssueHandler = (req, res) => {
  // return a specific issue by ID
  Issue.findById(req.params.id)
    .then((issue) => res.json(issue))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const deleteIssueHandler = (req, res) => {
  // delete a specific issue by ID
  Issue.findByIdAndDelete(req.params.id)
    .then((issue) => {
      // log the deleted issue to console
      console.log("successfully deleted", issue);
      res.json("Issue deleted.");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

export const updateIssueHandler = (req, res) => {
  // find the issue by ID
  Issue.findById(req.params.id)
    .then((issue) => {
      // update the issue with the new data
      issue.title = req.body.title;
      issue.description = req.body.description;
      issue.status = req.body.status;

      issue
        .save()
        .then((issue) => {
          // log the updated issue to console
          console.log("successfully updated", issue);
          res.json("Issue updated!");
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
