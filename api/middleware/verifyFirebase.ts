import { Request, Response, NextFunction } from 'express';

// import Firebase from '../../db/utils/Firebase';
import UnauthorizedError from '../errors/UnauthorizedError';

/**
 * Verifies the user's id against Firebase's uid
 */
const verifyFirebase = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  // const { userId } = req.params;

  if (!token) {
    const err = new UnauthorizedError('No token, authorization denied.', null, 'This is a test');
    return next(err);
  }

  //   const { uid } = await Firebase.verifyToken(token);

  //   if (uid === userId) {
  //     return next();
  //   }

  const err = new UnauthorizedError('You are not authorized for this request.');
  return next(err);
};

export default verifyFirebase;
