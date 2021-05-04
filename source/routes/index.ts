import express from 'express';
import { addBook, deleteAllBoooks, deleteBook, getBook, getBooks } from '../controllers';

const router = express.Router();

router.get('/', getBooks);
router.post('/addbook', addBook);
router.get('/deletebook', deleteBook);
router.get('/deletebooks', deleteAllBoooks);
router.post('/getbook', getBook);

export default router;
