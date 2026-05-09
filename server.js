import express from "express";
import {
  createBook,
  updateBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
} from "./controllers/bookController.js";

const app = express();
app.use(express.json());

const port = 5000;

//Add book
app.post("/books", createBook);

//Get all books
app.get("/books", getAllBooks);

//Get single book
app.get("/books/:id", getSingleBook);

//Update book
app.put("/books/:id", updateBook);

//Delete book
app.delete("/books/:id", deleteBook);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
