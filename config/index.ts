require('dotenv').config({ path: `${__dirname}../../.env` });

/**
 * The server environment
 */
export const NODE_ENV: string = process.env.NODE_ENV || 'test';

/**
 * The server port
 */
export const PORT: string = process.env.PORT || '5000';

/**
 * Port used to connect to Redis
 */
export const REDIS_PORT: string = process.env.REDIS_PORT || '6379';

/**
 * URL to connect to Redis
 */
export const REDIS_URL: string = process.env.REDIS_URL || 'localhost';

/**
 * Configuration for development and test Postgres databases
 */
export const DEV_DB: Record<string, string | Record<string, string | undefined>> = {
  client: 'pg',
  connection: {
    host: process.env.DEV_DB_HOST || 'localhost',
    database: process.env.DEV_DB_NAME || 'local_test',
    port: process.env.DEV_DB_PORT || '5432',
    user: process.env.DEV_DB_USER || 'postgres',
    password: process.env.DEV_DB_PASS || 'postgres',
  },
  migrations: {
    directory: `${__dirname}/../db/migrations`,
  },
  seeds: {
    directory: `${__dirname}/../db/seeds`,
  },
};

/**
 * Configuration for production Postgres database
 */
export const PROD_DB: Record<string, string | Record<string, string | undefined>> = {
  client: 'pg',
  searchPath: process.env.DB_SCHEMA || '',
  connection: {
    host: process.env.DEV_DB_HOST || '',
    database: process.env.DEV_DB_NAME || '',
    port: process.env.DEV_DB_PORT || '',
    user: process.env.DEV_DB_USER || '',
    password: process.env.DEV_DB_PASS || '',
  },
  migrations: {
    directory: `${__dirname}/migrations`,
  },
};

/**
 * Configuration for firebase authentication
 */
export const FIREBASE_CONFIG: Record<string, string | undefined> = {
  type: process.env.FB_TYPE,
  project_id: process.env.FB_PROJECT_ID || '123',
  private_key_id: process.env.FB_PRIVATE_KEY_ID,
  private_key: process.env.FB_PRIVATE_KEY || '123',
  client_email: process.env.FB_CLIENT_EMAIL || '123@13.com',
  client_id: process.env.FB_CLIENT_ID,
  auth_uri: process.env.FB_AUTH_URI,
  token_uri: process.env.FB_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FB_AUTH_PROV,
  client_x509_cert_url: process.env.FB_CLIENT_CERT,
};
