import express from 'express';

import healthCheckRouter from './healthCheck.routes';
import placeholderRouter from './placeholder.routes';

const routes = express.Router();

routes.use('/', [
  placeholderRouter,
  healthCheckRouter,
]);

export default routes;
