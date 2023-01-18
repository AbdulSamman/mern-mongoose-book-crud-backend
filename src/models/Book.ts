import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: String,
  description: String,
  numberOfPages: Number,
  language: String,
  imageUrl: String,
  buyUrl: String,
});
export const Book = model("book", bookSchema);
