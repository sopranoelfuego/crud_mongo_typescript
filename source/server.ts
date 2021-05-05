import express from 'express';
import log from './config/log';
import config from './config/config';
import { config as dotenv } from 'dotenv';

import router from './routes';
import cors from 'cors';
import { loggerMiddleware } from './middlwares/requestLoggerMiddleware';
import dbConnect from './config/db.config';

const app = express();

const NAMESPACE = 'server';
// load variables
dotenv();
// initiate database
dbConnect();

// logging
app.use(loggerMiddleware);
// middlware
app.use(cors());
app.use(express.json());
app.use('/', router);
// setting server

app.listen(config.server.port, () => log.info(NAMESPACE, `server running on ${config.server.hostname} :${config.server.port}`));
