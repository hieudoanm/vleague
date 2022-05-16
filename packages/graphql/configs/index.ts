import dotenv from 'dotenv';

export const NODE_ENV: string = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  dotenv.config();
}

export const PORT: string = process.env.PORT || '5000';

export const API_KEY_VLEAGUE: string = process.env.API_KEY_VLEAGUE || '';
// API Key
export const DEV_KEY_API = 'http://localhost:6666';
export const PRO_KEY_API = 'https://vleague-key.vercel.app/api';
export const KEY_API = NODE_ENV === 'development' ? DEV_KEY_API : PRO_KEY_API;
// Data API
export const DEV_DATA_API = 'http://localhost:8000';
export const PRO_DATA_API = 'https://vleague-functions.vercel.app/api';
export const DATA_API =
  NODE_ENV === 'development' ? DEV_DATA_API : PRO_DATA_API;
