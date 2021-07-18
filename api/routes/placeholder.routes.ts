import express from 'express';

import handleHttpException from '../utils/handleHttpException';
import { getId } from '../controllers/placeholder.controller';
import verifyFirebase from '../middleware/verifyFirebase';

const router = express.Router();

router.get('/square/:id', handleHttpException(getId));

export default router;
