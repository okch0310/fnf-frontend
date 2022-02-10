import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { clickBoolean } from '../../utils/Functions';
import { HorizonNavTri } from '../../styles/icons';
import ChartRange from '../SearchCondition/Conditions/ChartRange';
import WeeklyPerformance from '../SearchCondition/Conditions/WeeklyPerformance';
import CheckOptions from '../SearchCondition/Conditions/CheckOptions';
import { filterSelect } from '../../atom/filterSelect';
import { useRecoilState } from 'recoil';

const HorizonNav = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});
  const [selectedFilterOptions] = useRecoilState(filterSelect);

  const showFilter = () => {
    clickBoolean(setShowFilterOptions);
  };
  // 이 fetch는 navbar에서만 사용
  useEffect(() => {
    fetch('./data/mockData.json')
      .then(res => res.json())
      .then(result => {
        setFilterOptions(result);
      });
  }, []);

  return (
    <NavContainer>
      <NavExpBtnContainer
        showFilterOptions={showFilterOptions}
        onClick={showFilter}
      >
        <HorizonNavTri />
      </NavExpBtnContainer>
      <ShrinkFilter showFilterOptions={showFilterOptions}>
        <ChartRange />
        <WeeklyPerformance value="weeklyDate" />
        <ProductType>
          {filterOptions.categories && (
            <CheckOptions
              value="categories" //데이터 접근을 위한 표시자
              filterOptions={filterOptions.categories}
            />
          )}
          {filterOptions.subcategories && (
            <CheckOptions
              value="subcategories"
              filterOptions={
                filterOptions.subcategories[selectedFilterOptions.categories]
              }
            />
          )}
          {filterOptions.seasons && (
            <CheckOptions
              value="seasons"
              filterOptions={filterOptions.seasons}
            />
          )}
        </ProductType>
        <SelectSeason />
      </ShrinkFilter>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 10px;
`;

const NavExpBtnContainer = styled.div`
  padding-bottom: 2px;
  margin-right: 5px;
  cursor: pointer;
  transition: transform 1.5s;
  transform-origin: center;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: ${props =>
    props.showFilterOptions ? 'rotate(810deg)' : 'rotate(0deg)'};
`;

const ShrinkFilter = styled.div`
  position: relative;
  padding-left: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  gap: 40px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    vertical-align: middle;

    border-radius: 10px;
    background-color: #377ef9;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transition: transform 1s;
    transform-origin: right;
    transform: ${props =>
      props.showFilterOptions ? 'scaleX(0)' : 'scaleX(1)'};
    z-index: 2;
  }
`;

const ProductType = styled.div`
  display: flex;
  gap: 5px;
`;

const SelectSeason = styled.div``;

export default HorizonNav;
