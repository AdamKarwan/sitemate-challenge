import express from "express";
import mongoose from "mongoose";
import issuesRouter from "./routes/issuesRouter.js";
import seedDatabase from "./utils/seedDb.js";

const app = express();
const port = process.env.PORT || 5000;

// connect to mongodb via mongoose
mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  // seed the db with some defaults if it's empty
  seedDatabase();
});

// setup the routes
app.use("/issues", issuesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
