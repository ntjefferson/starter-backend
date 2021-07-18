import express, {
  Application, Request, Response, NextFunction,
} from 'express';
import cors from 'cors';
import responseTime from 'response-time';

import logger from './logger';
import successLogger from './logger/successLogger';
import { HttpRequestError } from './api/types';
import api from './api/routes';
import { NODE_ENV, PORT } from './config';

const app: Application = express();

app.use(responseTime({ digits: 0, suffix: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handles successful requests
app.use(successLogger);

// Start of routes
app.use('/v1', api);

// Error handler
app.use((err: HttpRequestError, req: Request, res: Response, next: NextFunction) => {
  const { status } = err;
  const { message } = err;
  const { additionalDetails } = err;
  const { uiMessage } = err;

  logger.error(message, {
    status: status || 500,
    originalUrl: req.originalUrl,
    path: req.path,
    method: req.method,
    ip: req.ip,
    duration: Number(res.getHeaders()['x-response-time']) || 0,
    headers: { ...req.headers, Authorization: '<SECRET TOKEN HIDDEN>' },
    body: req.body,
    params: req.params,
    ...err,
  });

  res.status(status || 500).send({
    status: status || 500,
    message:
      message
      || 'There was an error processing the request.',
    additionalDetails: {
      ...additionalDetails,
    },
    uiMessage:
      uiMessage
      || 'There was an error processing the request. Please contact support.',
  });
});

if (NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log(`🚀 Now listening on port ${PORT}...`));
}

export default app;
