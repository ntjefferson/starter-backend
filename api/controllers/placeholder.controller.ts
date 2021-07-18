import { Request, Response, NextFunction } from 'express';
import BadRequestError from '../errors/BadRequestError';
import { squareId } from '../services/placeholder.service';

const getId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id) {
    throw new BadRequestError('Missing required field: id');
  }

  if (!Number(id)) {
    throw new BadRequestError('Field "id" must be a number.');
  }

  const squaredNumber = squareId(Number(id));

  return res.status(200).json({ number: squaredNumber });
};

export { getId };
