import mongoose from 'mongoose';

import 'dotenv/config';

const dbConnect = async () => {
    try {
        let con = await mongoose.connect(`${process.env.MONGO_URI}`, {});
    } catch (error) {}
};
