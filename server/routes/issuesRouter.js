import { Router } from "express";

const router = Router();

// Get all issues
router.route("/").get();

// Create a new issue
router.route("/").post();

// Get a specific issue by ID
router.route("/:id").get();

// Delete a specific issue by ID
router.route("/:id").delete();

// Update a specific issue by ID
router.route("/:id").put();

export default router;
