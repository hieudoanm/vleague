import { en as commonEn, vi as commonVi } from '../shared';

const en: Record<string, string> = {
  videos: 'videos',
  viewAllTables: 'view all tables',
  ...commonEn,
};

const vi: Record<string, string> = {
  videos: 'videos',
  viewAllTables: 'xem chi tiết',
  ...commonVi,
};

export const messagesByLocales: Record<'en' | 'vi', Record<string, string>> = {
  en,
  vi,
};
