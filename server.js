import express from "express";

const app = express();
app.use(express.json());

const port = 5000;

const books = [];

app.post("/books", (req, res) => {
  //   const title = req.body.title;
  //   const author = req.body.author;
  //   const price = req.body.price;  OR in a single line

  const { title, author, price } = req.body;

  if (!title || !author || !price) {
    return response.json({ error: "All fields are required!" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    price,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.json({ message: "Book not found." });
  }
  res.status(200).json(book);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, price } = req.body;

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found!" });
  }
  books[index] = { id, title, author, price };

  res.json({ message: "Book updated", book: books[index] });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found!" });
  }

  books.splice(index, 1);
  res.json({ message: "Book Deleted." });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
