import books from '../models/bookModel.js'

export const getAllBooks = (req,res) =>{
      res.json(books);
}

export const createBook = (req,res) => {
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
}

export const getSingleBook = (req,res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.json({ message: "Book not found." });
  }
  res.status(200).json(book);
}

export const updateBook = (req,res) => {
  const id = parseInt(req.params.id);
  const { title, author, price } = req.body;

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found!" });
  }
  books[index] = { id, title, author, price };

  res.json({ message: "Book updated", book: books[index] });
}

export const deleteBook = (req,res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found!" });
  }

  books.splice(index, 1);
  res.json({ message: "Book Deleted." });
}