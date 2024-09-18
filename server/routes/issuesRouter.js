import { Router } from "express";
import {
  createIssueHandler,
  deleteIssueHandler,
  getIssueHandler,
  getIssuesHandler,
  updateIssueHandler,
} from "../controllers/issueControllers.js";

const router = Router();

// Get all issues
router.route("/").get(getIssuesHandler);

// Create a new issue
router.route("/").post(createIssueHandler);

// Get a specific issue by ID
router.route("/:id").get(getIssueHandler);

// Delete a specific issue by ID
router.route("/:id").delete(deleteIssueHandler);

// Update a specific issue by ID
router.route("/:id").put(updateIssueHandler);

export default router;
