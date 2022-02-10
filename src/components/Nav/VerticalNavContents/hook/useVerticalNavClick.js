import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import { selectedSideMenu } from '../../../../atom/sideNav';

const BTN_CLICKED_STATUS = {
  '/category': {
    all: true,
    검색량: false,
    주간실적: false,
    판매채널: false,
  },
};

export default function useVerticalNavClick() {
  const location = useLocation();

  const [isBtnClicked, setIsBtnClicked] = useState(
    BTN_CLICKED_STATUS[location.pathname]
  );

  const setSelectedSideMenu = useSetRecoilState(selectedSideMenu);

  const updateBtnClicked = name => {
    setIsBtnClicked(current => {
      const initObj = { ...current };
      const keys = Object.keys(current);

      for (let i = 0; i < keys.length; i++) {
        initObj[keys[i]] = false;
      }

      initObj[name] = true;
      return initObj;
    });

    setSelectedSideMenu(name);
  };

  const handleBtnClick = e => {
    const name = e.target.getAttribute('name');

    updateBtnClicked(name);
  };

  return { isBtnClicked, handleBtnClick };
}
