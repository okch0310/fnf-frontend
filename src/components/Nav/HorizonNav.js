import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  clickBoolean,
  dateConverter,
  setRecentSunday,
} from '../../utils/Functions';
import { HorizonNavTri } from '../../styles/icons';
import ChartRange from '../SearchCondition/Conditions/ChartRange';
import WeeklyPerformance from '../SearchCondition/Conditions/WeeklyPerformance';
import CheckOptions from '../SearchCondition/Conditions/CheckOptions';
import SelectButton from '../Buttons/SelectButton';

import { useRecoilState } from 'recoil';
import {
  filterSelect,
  selectedEachRowName,
  selectedEachRowNum,
} from '../../atom/filterSelect';
import {
  staticData,
  isDataLoaded,
  dataLoadedCount,
  dataLoadedProgress,
  styleRankingData,
  conditionData,
  checkedFilters,
} from '../../atom/staticData';

import useMakeQuery from '../../components/Nav/HorizonNavContents/hook/useMakeQuery';
import {
  FILTERINFO,
  API,
  DATANAME,
  STYLERANKING_API,
  STYLERANKING_NAME,
} from '../Nav/HorizonNavContents/contants/api';

import SerialNum from '../SearchCondition/Conditions/SerialNum';
import DeadlineWeek from '../SearchCondition/Conditions/DeadlineWeek';

const HorizonNav = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useRecoilState(filterSelect);

  const [statData, setStatData] = useRecoilState(staticData);
  const [atomStyleRankingData, setStyleRankingData] =
    useRecoilState(styleRankingData);
  const [, setDataLoaded] = useRecoilState(isDataLoaded);
  const [, setDataLoadedCount] = useRecoilState(dataLoadedCount);
  const [, setConditionData] = useRecoilState(conditionData);
  const [, setSelectedEachRowName] = useRecoilState(selectedEachRowName);
  const [, setSelectedEachRowNum] = useRecoilState(selectedEachRowNum);
  const [isLoading, setIsLoading] = useRecoilState(dataLoadedProgress);
  const { queryString } = useMakeQuery();

  const { categories, subcategories, seasons, domains, items } =
    selectedFilterOptions;

  const location = useLocation().pathname;

  const isFilterAllSelected =
    categories !== '' &&
    subcategories.size !== 0 &&
    seasons.size !== 0 &&
    isLoading === false;

  const isAllChecked =
    subcategories.length && domains.length && items.length && seasons.length;

  const showFilter = () => {
    clickBoolean(setShowFilterOptions);
  };

  useEffect(() => {
    axios.get(FILTERINFO).then(result => {
      setFilterOptions(result.data);
    });
  }, []);

  const searchBtnClick = () => {
    if (location === '/category') {
      isFilterAllSelected
        ? getStatistics()
        : isLoading
        ? alert('다른 필터의 선택이 필요한 경우 새로고침 후 진행해주세요.')
        : alert('검색 필터를 모두 선택해주시기 바랍니다.');
    } else {
      isAllChecked
        ? getStyleRankingDatas()
        : isLoading
        ? alert('다른 필터의 선택이 필요한 경우 새로고침 후 진행해주세요.')
        : alert('검색 필터를 모두 선택해주시기 바랍니다.');
    }
  };

  const resetSelect = () => {
    setSelectedFilterOptions(prev => {
      const prevState = { ...prev };

      prevState[`serial-number`] = '';
      prevState.limit = 200;

      return { ...prevState };
    });
    setStyleRankingData({
      top20Summary: null,
      top20List: null,
      top20TotalSummary: null,
    });
    setConditionData(false);
    setSelectedEachRowName('');
    setSelectedEachRowNum('');
  };
  async function getStyleRankingDatas() {
    const prevStat = { ...atomStyleRankingData };

    setIsLoading(true);
    setDataLoaded(false);
    setDataLoadedCount(0);
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      Accept: '*/*',
    };

    // eslint-disable-next-line no-unused-vars
    const messageObject = await STYLERANKING_API.reduce(
      async (promise, url, idx) => {
        // 누산값 받아오기 (2)
        let result = await promise;
        // 누산값 변경 (3)
        result = await axios
          .get(`${url}?brand=M&${queryString}`, { headers })
          .then(res => {
            setStyleRankingData(prev => {
              prevStat[STYLERANKING_NAME[idx]] = res.data;
              return { ...prevStat };
            });
            setDataLoadedCount(current => {
              return current + 1;
            });
          })
          .catch(err => alert(err));
        // 다음 Promise 리턴
        return result;
      },
      {}
    ).then(() => {
      setIsLoading(false);
      setDataLoaded(true);
      setDataLoadedCount(0);
    });
  }

  async function getStatistics() {
    const prevStat = { ...statData };

    setIsLoading(true);
    setDataLoaded(false);
    setDataLoadedCount(0);

    // eslint-disable-next-line no-unused-vars
    const messageObject = await API.reduce(async (promise, url, idx) => {
      // 누산값 받아오기 (2)
      let result = await promise;
      // 누산값 변경 (3)
      result = await axios
        .get(`${url}?brand=M&adult-kids=성인&${queryString}`)
        .then(res => {
          setStatData(prev => {
            prevStat[DATANAME[idx]] = res.data;
            return { ...prevStat };
          });
          setDataLoadedCount(current => {
            return current + 1;
          });
        })
        .catch(err => alert(err));
      // 다음 Promise 리턴
      return result;
    }, {}).then(() => {
      setIsLoading(false);
      setDataLoaded(true);
      setDataLoadedCount(0);
    });
  }

  const handleLimit = e => {
    setSelectedFilterOptions(current => {
      const newObj = { ...current };
      newObj[e.target.val] = e.target.value;
      return newObj;
    });
  };

  return (
    <NavContainer>
      <NavExpBtnContainer
        showFilterOptions={showFilterOptions}
        onClick={showFilter}
      >
        <HorizonNavTri />
      </NavExpBtnContainer>
      <ShrinkFilter showFilterOptions={showFilterOptions}>
        {location === `/category` ? (
          <>
            <ChartRange />
            <WeeklyPerformance value="weekly-date" />
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
                    filterOptions.subcategories[
                      selectedFilterOptions.categories
                    ]
                  }
                />
              )}
            </ProductType>
            <SelectSeason>
              {filterOptions.seasons && (
                <CheckOptions
                  value="seasons"
                  filterOptions={filterOptions.seasons}
                />
              )}
            </SelectSeason>
          </>
        ) : (
          <>
            <SelectButton type="reset" value="초기화" click={resetSelect} />
            <SerialNumContainer>
              <SerialNum serialNumber="제품명 또는 품번" val="items" />
            </SerialNumContainer>
            <RankingContainer>
              상위
              <RankingInput
                numberType="number"
                defaultValue={200}
                val="limit"
                onChange={handleLimit}
              />
              위
            </RankingContainer>
            <DeadlineWeek />
          </>
        )}
        <SelectButton type="search" value="검색" click={searchBtnClick} />
      </ShrinkFilter>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 10px;
  background-color: #eeeeee;
  height: 4.8vh;
`;

const NavExpBtnContainer = styled.div`
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
    z-index: 5;
  }
`;

const ProductType = styled.div`
  display: flex;
  gap: 5px;
`;

const SelectSeason = styled.div``;

const SerialNumContainer = styled.div`
  width: 290px;
`;

const RankingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  text-align: center;
  word-break: keep-all;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const RankingInput = styled(SerialNum)``;

export default HorizonNav;
