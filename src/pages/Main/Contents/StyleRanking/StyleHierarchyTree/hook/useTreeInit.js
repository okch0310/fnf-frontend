import { useState, useEffect } from 'react';

import { filterSelect } from '../../../../../../atom/filterSelect';
import { useRecoilState } from 'recoil';

export default function useTreeInit(name, data) {
  const [checked, setChecked] = useState([]);
  const [, setFilterSelect] = useRecoilState(filterSelect);

  useEffect(() => {
    const newList = [];
    switch (name) {
      case 'subcategories':
        data.forEach(item =>
          Object.entries(item)[2][1].map(item => newList.push(item.value))
        );
        break;
      case 'seasons':
      case 'items':
        data.forEach(item =>
          Object.entries(item)[2][1].map(item =>
            Object.entries(item)[2][1].map(item => newList.push(item.value))
          )
        );
        break;
      case 'domains':
      case 'adult-kids':
        data.forEach(item => newList.push(item.value));
        break;
      default:
    }
    setChecked(newList);
    setFilterSelect(current => {
      const newFilter = { ...current };
      newFilter[name] = newList;
      return newFilter;
    });
  }, [name, data]);

  useEffect(() => {
    setFilterSelect(current => {
      const newFilter = { ...current };
      newFilter[name] = checked;
      return newFilter;
    });
  }, [checked]);

  return { checked, setChecked };
}
