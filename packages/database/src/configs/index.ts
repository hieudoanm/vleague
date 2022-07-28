import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const DATABASE_HOST: string = process.env.DATABASE_HOST || 'localhost';
export const DATABASE_PORT: string = process.env.DATABASE_PORT || '5432';
export const DATABASE_USER: string = process.env.DATABASE_USER || 'username';
export const DATABASE_PASS: string = process.env.DATABASE_PASS || 'password';
export const DATABASE_NAME: string = process.env.DATABASE_NAME || 'database';

export const DATABASE_URL: string =
  process.env.DATABASE_URL ||
  'postgres://username:password@localhost:5432/database';
