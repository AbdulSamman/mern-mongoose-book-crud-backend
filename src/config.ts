import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 3053;

export const MONGODB_CONNECTION =
  process.env.MONGODB_CONNECTION ?? "mongodb://localhost/bookapi";
