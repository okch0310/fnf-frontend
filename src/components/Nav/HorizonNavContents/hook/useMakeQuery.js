import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../../atom/filterSelect';

const useMakeQuery = () => {
  const [queryString, setQueryString] = useState('');
  const [selectedFilterOptions] = useRecoilState(filterSelect);

  const setToArr = setObj => {
    const tempArr = [];
    for (let value of setObj) {
      tempArr.push(value);
    }
    return tempArr;
  };

  useEffect(() => {
    const selectedObj = { ...selectedFilterOptions };
    const containerArr = [];

    for (let key in selectedObj) {
      switch (key) {
        case 'subcategories':
          selectedObj[key] = setToArr(selectedObj[key]);
          if (selectedObj[key].length) {
            for (let [idx, element] of selectedObj[key].entries()) {
              selectedObj[key][idx] = `${key}=${element}`;
            }
            containerArr.push(selectedObj[key].join('&'));
          }
          break;
        case 'seasons':
          selectedObj[key] = setToArr(selectedObj[key]);
          if (selectedObj[key].length) {
            for (let [idx, element] of selectedObj[key].entries()) {
              selectedObj[key][idx] = `${key}=${element}`;
            }
            containerArr.push(selectedObj[key].join('&'));
          }
          break;
        default:
          selectedObj[key] !== '' &&
            containerArr.push(`${key}=${selectedObj[key]}`);
          break;
      }
    }

    setQueryString(prev => {
      return containerArr.join('&');
    });
  }, [selectedFilterOptions]);

  return { queryString, setQueryString };
};

export default useMakeQuery;
