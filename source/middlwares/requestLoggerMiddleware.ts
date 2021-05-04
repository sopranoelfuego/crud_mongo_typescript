import { Response, Request, NextFunction } from 'express';
import log from '../config/log';
const NAMESPACE = 'server';
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    log.info(NAMESPACE, `METHOD - [${req.method}] URL - [${req.url}] IP - [${req.socket.remoteAddress}]`);
    let start = new Date().getTime();
    res.on('finish', () => {
        const elapse = new Date().getTime() - start;
        log.info(NAMESPACE, `METHOD - [${req.method}] URL - [${req.url}] IP - [${req.socket.remoteAddress}]`, `STATUS - [${res.statusCode}] -[time pass] ${elapse} ms`);
    });
    next();
};

export { loggerMiddleware };
