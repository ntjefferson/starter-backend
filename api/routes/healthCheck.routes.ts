import express, {
  Request, Response, NextFunction,
} from 'express';

const router = express.Router();

/**
 * Health check for load balancer
 */
router.get('/healthCheck', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Health check successful.' });
});

export default router;
