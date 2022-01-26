import { atom } from 'recoil';

export const filterSelect = atom({
  key: 'filterSelect',
  default: {
    startDate: '',
    endDate: '',
    weeklyDate: '',
    categories: '',
    subcategories: new Set(),
    seasons: new Set(),
  },
});
