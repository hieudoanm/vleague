import { en as commonEn, vi as commonVi } from '../shared';

const en: Record<string, string> = {
  clubProfile: 'club profile',
  ...commonEn,
};

const vi: Record<string, string> = {
  clubProfile: 'chi tiết',
  ...commonVi,
};

export const messagesByLocales: Record<'en' | 'vi', Record<string, string>> = {
  en,
  vi,
};
