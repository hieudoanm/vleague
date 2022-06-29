import dotenv from 'dotenv';

export const NODE_ENV: string = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  dotenv.config();
}

export const PORT: string = process.env.PORT || '5000';

export const API_KEY_VLEAGUE: string = process.env.API_KEY_VLEAGUE || '';
// Data API
export const DEV_SERVER_API = 'http://localhost:8080/api';
export const PRO_SERVER_API = 'https://vleague-server.vercel.app/api';
export const SERVER_API =
  NODE_ENV === 'development' ? DEV_SERVER_API : PRO_SERVER_API;
