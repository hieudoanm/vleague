export const DEV_API = 'http://localhost:5000';
export const PRO_API = 'https://vleague-graphql.vercel.app';
const NODE_ENV = process.env.NODE_ENV || 'development';

export const API = NODE_ENV === 'development' ? DEV_API : PRO_API;
