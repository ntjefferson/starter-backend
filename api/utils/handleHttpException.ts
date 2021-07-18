import { Request, Response, NextFunction } from 'express';

/**
 * Wraps API route functions and sends error request forward for logging
 */
const handleHttpException = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch((err: Error) => {
    next(err);
  });
};

export default handleHttpException;
