import knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import { types } from 'pg';
import knexConfig from './knexfile';

/**
 * There was an issue with "date" columns in Postgres returning
 * as a Date() object with timestamp and all. Need just string.
 * @url https://stackoverflow.com/questions/50716120/can-we-always-fetch-date-column-as-string-varchar-with-knex-and-postgres
 */
types.setTypeParser(1082, (val: any) => val);

const db = knex({ ...knexConfig, ...knexSnakeCaseMappers() });

/**
 * Called when the query errors out and throws an error for it to be logged
 */
db.on('query-error', (err: Error, obj: any) => {
  const error: { message?: string; query?: any; details?: Error } = {};
  error.message = 'There was an error querying the database. Please contact support.';
  error.query = obj;
  error.details = err;
  throw error;
});

export default db;
