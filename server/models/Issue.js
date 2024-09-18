import mongoose from "mongoose";

const Schema = mongoose.Schema;

const issueSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
