/** @type {import('next').NextConfig} */

const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
const DATABASE_PORT = process.env.DATABASE_PORT || '5432';
const DATABASE_USER = process.env.DATABASE_USER || 'username';
const DATABASE_PASS = process.env.DATABASE_PASS || 'password';
const DATABASE_NAME = process.env.DATABASE_NAME || 'database';

const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgres://username:password@localhost:5432/database';

const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_NAME,
    DATABASE_URL,
  },
};

module.exports = nextConfig;
