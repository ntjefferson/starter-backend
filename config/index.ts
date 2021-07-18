require('dotenv').config({ path: `${__dirname}../../.env` });

/**
 * The server environment
 */
const NODE_ENV: string = process.env.NODE_ENV || 'test';

/**
 * The server port
 */
const PORT: string = process.env.PORT || '5000';

/**
 * Port used to connect to Redis
 */
const REDIS_PORT: string = process.env.REDIS_PORT || '6379';

/**
 * URL to connect to Redis
 */
const REDIS_URL: string = process.env.REDIS_URL || 'localhost';

/**
 * Configuration for firebase authentication
 */
const FIREBASE_CONFIG: Record<string, string | undefined> = {
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

export {
  NODE_ENV,
  PORT,
  REDIS_PORT,
  REDIS_URL,
  FIREBASE_CONFIG,
};
