import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
);


