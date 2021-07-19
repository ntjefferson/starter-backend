import { DEV_DB, PROD_DB } from '../config';

const environtmentDb: any = {
  test: DEV_DB,
  development: DEV_DB,
  production: PROD_DB,
};

const environment = process.env.NODE_ENV || 'test';

export default environtmentDb[environment];
