import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../../atom/filterSelect';

const CheckElement = ({ value, text, allChecked, setAllChecked }) => {
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useRecoilState(filterSelect);
  const [singleChecked, setSingleChecked] = useState(false);

  useEffect(() => {
    switch (value) {
      case 'categories':
        selectedFilterOptions[value] === text
          ? !singleChecked && setSingleChecked(true)
          : setSingleChecked(false);
        break;
      case 'subcategories':
        selectedFilterOptions[value].has(text)
          ? !singleChecked && setSingleChecked(true)
          : setSingleChecked(false);
        break;
      case 'seasons':
        selectedFilterOptions[value].has(text)
          ? !singleChecked && setSingleChecked(true)
          : setSingleChecked(false);
        break;
      default:
        alert('잘못된 선택입니다.');
    }
    return null;
  }, [selectedFilterOptions]);

  const selectHandler = event => {
    const prevState = { ...selectedFilterOptions };

    switch (value) {
      case 'categories':
        setSelectedFilterOptions(() => {
          prevState.subcategories.clear();
          prevState[value] = !singleChecked ? text : '';
          return { ...prevState };
        });
        break;
      case 'subcategories':
        setSelectedFilterOptions(() => {
          !singleChecked
            ? prevState[value].add(text)
            : prevState[value].delete(text);
          return { ...prevState };
        });
        break;
      case 'seasons':
        setSelectedFilterOptions(() => {
          !singleChecked
            ? prevState[value].add(text)
            : prevState[value].delete(text);
          return { ...prevState };
        });
        break;
      default:
        alert('잘못된 선택입니다.');
    }
  };

  return (
    <ElementLabel>
      <Checkbox
        checked={singleChecked ? true : false}
        onChange={selectHandler}
      />
      <ElementText>{text}</ElementText>
    </ElementLabel>
  );
};

const ElementLabel = styled.label`
  display: block;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const ElementText = styled.span``;

export default CheckElement;
