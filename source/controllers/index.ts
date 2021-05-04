import { Request, Response, NextFunction } from 'express';
import log from '../config/log';
const NAMESPACE = 'SAMPLE RUNNING ';
const addBook = (req: Request, res: Response, next: NextFunction) => {
    log.info(NAMESPACE, 'just running the app for testing ');
    res.status(201).json({ success: true, message: 'you hit in!!' });
};
const getBooks = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, data: 'get all books' });
};
const getBook = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, data: 'get single book here man' });
};
const deleteBook = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, data: 'delete single book' });
};
const deleteAllBoooks = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, data: 'erase all books' });
};
export { addBook, getBooks, getBook, deleteAllBoooks, deleteBook };
