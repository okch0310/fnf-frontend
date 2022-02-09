import { atom } from 'recoil';

export const filterSelect = atom({
  key: 'filterSelect',
  default: {
    'start-date': '',
    'end-date': '',
    'weekly-date': '',
    categories: '',
    subcategories: new Set(),
    seasons: new Set(),
  },
});
