import express from 'express';
import { addBook, deleteAllBoooks, deleteBook, getBook, getBooks } from '../controllers';

const router = express.Router();

router.get('/get/books', getBooks);
router.post('/post/addbook', addBook);
router.get('/del/deletebook', deleteBook);
router.get('/del/deletebooks', deleteAllBoooks);
router.get('/get/book/:id', getBook);

export default router;
