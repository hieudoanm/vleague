import dotenv from 'dotenv';

export const NODE_ENV: string = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  dotenv.config();
}

export const PORT: string = process.env.PORT || '5000';

export const API_KEY_VLEAGUE: string = process.env.API_KEY_VLEAGUE || '';

export const LOCALHOST_API = 'http://localhost:8000';
export const PRODUCTION_API = 'https://vleague-functions.vercel.app/api';
export const API = NODE_ENV === 'development' ? LOCALHOST_API : PRODUCTION_API;
