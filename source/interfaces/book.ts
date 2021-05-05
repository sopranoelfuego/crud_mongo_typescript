import { Document } from 'mongoose';

export default interface bookInt extends Document {
    title: string;
    author: string;
    informationBook: string;
}
