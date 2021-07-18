import { Request, Response, NextFunction } from 'express';
import logger from '.';

const successLogger = (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', () => {
    const headers = res.getHeaders();
    const responseTime = headers['x-response-time'];

    if (res.statusCode < 300 || res.statusCode === 304) {
      logger.info('API Success', {
        status: res.statusCode,
        originalUrl: req.originalUrl,
        path: req.path,
        method: req.method,
        ip: req.ip,
        duration: Number(responseTime) || 0,
        headers: { ...req.headers, Authorization: '<SECRET TOKEN HIDDEN>' },
        body: req.body,
        params: req.params,
        query: req.query || {},
      });
    }
  });

  next();
};

export default successLogger;
