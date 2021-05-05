import mongoose from 'mongoose';

import 'dotenv/config';
import log from './log';

const NAMESPACE = 'server';
const options = {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    socketTimeoutMS: 300000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const dbConnect = async () => {
    try {
        let con = await mongoose.connect(`${process.env.MONGO_URI}`, options);
        if (con) {
            return log.error(NAMESPACE, `database running on ${con.connection.host} `);
        }
    } catch (error) {
        log.error(NAMESPACE, `error acure dabatase connection error ${error.message}`);
    }
};
export default dbConnect;
