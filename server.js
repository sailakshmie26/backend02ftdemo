import express from "express";
import bookRouter from './routes/bookRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express();
app.use(express.json());
app.use('/books', bookRouter)
app.use('/users', userRouter)

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
