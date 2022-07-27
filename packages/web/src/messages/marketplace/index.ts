import { en as commonEn, vi as commonVi } from '../shared';

const en: Record<string, string> = {
  ...commonEn,
};

const vi: Record<string, string> = {
  ...commonVi,
};

export const messagesByLocales: Record<'en' | 'vi', Record<string, string>> = {
  en,
  vi,
};
