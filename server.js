import express from "express";
import bookRouter from './routes/bookRoutes.js'

const app = express();
app.use(express.json());
app.use('/books', bookRouter)

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
