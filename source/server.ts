import express from 'express';
import log from './config/log';
import config from './config/config';
import router from './routes';
import cors from 'cors';
import { loggerMiddleware } from './middlwares/requestLoggerMiddleware';
const app = express();

const NAMESPACE = 'server';
app.use(cors());
// logging
app.use(loggerMiddleware);
// middlware
app.use('/', router);
// setting server

app.listen(config.server.port, () => log.info(NAMESPACE, `server running on ${config.server.hostname} :${config.server.port}`));
