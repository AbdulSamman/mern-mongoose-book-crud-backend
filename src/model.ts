import { Book } from "./models/Book.js";
import mongoose from "mongoose";
import * as config from "./config.js";

mongoose.set("strictQuery", false);

mongoose.connect(config.MONGODB_CONNECTION);

export const getBooks = async () => {
  const books = await Book.find();
  return books;
};

export const getApiInstructions = () => {
  return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	code {
		background-color: #333;
	}
</style>
<h1>Book Site API</h1>
<ul>
	<li><code>/books</code> - all books</li>
	<li><code>/books/3</code> - book with id 3</li>
</ul>
	`;
};
