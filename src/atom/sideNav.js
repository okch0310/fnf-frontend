import { atom } from 'recoil';

export const selectedSideMenu = atom({
  key: 'selectedSideMenu',
  default: 'all',
});

export const isSideNavActive = atom({
  key: 'isSideNavActive',
  default: false,
});
