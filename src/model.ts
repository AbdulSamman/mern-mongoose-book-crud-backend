import { Book } from "./models/Book.js";
import mongoose from "mongoose";
import * as config from "./config.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGODB_CONNECTION);

export const getBooks = async () => {
  const rawBooks = await Book.find();
  const books = [];
  rawBooks.map((rawBook) => {
    const book = {
      ...rawBook.toObject({ versionKey: false }),
      language:
        rawBook.language.charAt(0).toUpperCase() + rawBook.language.slice(1),
    };
    books.push(book);
  });
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
