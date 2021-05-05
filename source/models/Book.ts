import mongoose, { Schema } from 'mongoose';
import bookInt from '../interfaces/book';

const bookSchema: Schema = new Schema(
    {
        title: { type: String, required: [true, 'add book please'] },

        author: { type: String, required: [true, 'add book please'] },

        informationBook: { type: String, required: [true, 'add information book please'] }
    },
    {
        timestamps: true
    }
);
export default mongoose.model<bookInt>('Book', bookSchema);
