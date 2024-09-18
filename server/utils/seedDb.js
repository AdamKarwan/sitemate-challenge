import Issue from "../models/Issue.js";

const seedIssues = [
  {
    title: "Issue 1",
    description: "Description for issue 1",
  },
  {
    title: "Issue 2",
    description: "Description for issue 2",
  },
  {
    title: "Issue 3",
    description: "Description for issue 3",
  },
];

// set up some initial Issues in the database if it's empty
const seedDatabase = async () => {
  try {
    const count = await Issue.countDocuments();
    if (count === 0) {
      await Issue.insertMany(seedIssues);
      console.log("Default issues inserted");
    } else {
      console.log("Issues already exist, skipping seeding");
    }
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

export default seedDatabase;
