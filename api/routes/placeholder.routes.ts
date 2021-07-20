import express from 'express';

import handleHttpException from '../utils/handleHttpException';
import { getId } from '../controllers/placeholder.controller';

const router = express.Router();

router.get('/square/:id', handleHttpException(getId));

export default router;
