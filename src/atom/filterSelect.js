import { atom } from 'recoil';
import { dateConverter, setRecentSunday } from '../utils/Functions';

export const filterSelect = atom({
  key: 'filterSelect',
  default: {
    'start-date': dateConverter(new Date()),
    'end-date': dateConverter(new Date()),
    'weekly-date': dateConverter(new Date()),
    categories: '',
    subcategories: new Set(),
    seasons: new Set(),
    'serial-number': '',
    limit: 200,
    'deadline-week': dateConverter(setRecentSunday(new Date())),
  },
});

export const selectedEachRowNum = atom({
  key: 'selectedEachRowNum',
  default: '',
});

export const selectedEachRowName = atom({
  key: 'selectedEachRowName',
  default: '',
});
