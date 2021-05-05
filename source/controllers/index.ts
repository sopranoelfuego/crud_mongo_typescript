import { Request, Response, NextFunction } from 'express';
import log from '../config/log';
import Book from '../models/Book';
import mongoose from 'mongoose';
const NAMESPACE = 'server';
const addBook = async (req: Request, res: Response, next: NextFunction) => {
    const { title, author, informationBook } = req.body;

    const book = new Book({ title, author, informationBook });

    await book.save((err, doc) => {
        if (err) {
            return res.status(500).json({ success: true, error: err.message });
        }
        res.status(200).json({ success: true, data: doc });
    });
};
const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    Book.find({})
        .exec()
        .then((docs) => {
            res.status(200).json({ success: true, count: docs.length, data: docs });
        })
        .catch((error) => {
            res.status(500).json({ success: false, err: error.message });
        });
};
const getBook = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log(req.params);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, error: 'invalid id ...' });
    }
    const book = await Book.findById(req.params.id);
    if (!book) {
        return res.status(404).json({ success: false, error: 'not found' });
    }
    res.status(200).json({ success: true, data: book });
};
const deleteBook = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, data: 'delete single book' });
};
const deleteAllBoooks = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, data: 'erase all books' });
};
export { addBook, getBooks, getBook, deleteAllBoooks, deleteBook };
