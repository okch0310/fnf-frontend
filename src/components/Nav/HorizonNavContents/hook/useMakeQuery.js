import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../../atom/filterSelect';

const useMakeQuery = () => {
  const [queryString, setQueryString] = useState('');
  const [selectedFilterOptions] = useRecoilState(filterSelect);
  const categoryKeyName = [
    'start-date',
    'end-date',
    'weekly-date',
    'categories',
    'subcategories',
    'seasons',
  ];
  const styleKeyName = ['serial-number', 'ranking', 'deadline-week'];

  const location = useLocation().pathname;

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

    if (location === '/category') {
      for (let key of categoryKeyName) {
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
    } else {
      for (let key of styleKeyName) {
        selectedObj[key] !== '' &&
          containerArr.push(`${key}=${selectedObj[key]}`);
      }
    }

    setQueryString(prev => {
      return containerArr.join('&');
    });
  }, [selectedFilterOptions]);

  return { queryString, setQueryString };
};

export default useMakeQuery;
