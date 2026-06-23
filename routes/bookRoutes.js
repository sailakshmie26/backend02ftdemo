import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createBook, updateBook, getAllBooks, getSingleBook, deleteBook } from '../controllers/bookController.js'

const router = express.Router()

router.post('/', protect, createBook)
router.get('/', getAllBooks)
router.get('/:id', getSingleBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router