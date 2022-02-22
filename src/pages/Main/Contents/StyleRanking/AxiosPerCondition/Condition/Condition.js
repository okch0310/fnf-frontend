import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../../StyleRankingAPI/baseAxios';

import {
  selectedEachRowNum,
  selectedEachRowName,
} from '../../../../../../atom/filterSelect';

import { conditionData } from '../../../../../../atom/staticData';
import { useRecoilValue, useRecoilState } from 'recoil';

import styled, { ThemeContext } from 'styled-components';

import ConditionSalesResult from '../ConditionResult/ConditionSalesResult';
import ConditionWeeklyResult from '../ConditionResult/ConditionWeeklyResult';
import ConditionChannelsResult from '../ConditionResult/ConditionChannelsResult';

const salesTrendEndPoints = ['korea', 'global', 'ratio'];
const eachChannel = ['overall', 'shops'];

export const ConditionContext = React.createContext();

export default function Condition() {
  const themeContext = useContext(ThemeContext);

  const [currentID, setCurrentID] = useState('매출추이');

  const atomSelectedEachRowNum = useRecoilValue(selectedEachRowNum);
  const atomSelectedEachRowName = useRecoilValue(selectedEachRowName);
  const [, setConditionData] = useRecoilState(conditionData);

  const [productNum, setProductNum] = useState('');
  const [productName, setProductName] = useState('');

  const handleProductNum = e => {
    setProductNum(e.target.value);
  };

  const handleProductName = e => {
    setProductName(e.target.value);
  };

  const isProductSelected = productNum !== '' && productName !== '';

  const clickHandler = id => {
    setCurrentID(id);
  };

  async function getData(id) {
    switch (id) {
      case '매출추이':
        await salesTrendEndPoints.reduce(async (promise, url) => {
          let result = await promise;
          result = await axiosInstance({
            url: `/conditions/sales-trend/${url}?brand=M&product-cd=${productNum}`,
          }).then(res =>
            setConditionData(current => {
              const newObj = { ...current };
              newObj[url] = res;
              return newObj;
            })
          );
          return result;
        }, {});
        break;
      case '주차별':
        axiosInstance({
          url: `/conditions/weekly?brand=M&product-cd=${productNum}`,
        }).then(res => setConditionData(res));
        break;
      case '채널별':
        await eachChannel.reduce(async (promise, url) => {
          let result = await promise;
          result = await axiosInstance({
            url: `/conditions/channel/${url}?brand=M&product-cd=${productNum}`,
          }).then(res =>
            setConditionData(current => {
              const newObj = { ...current };
              newObj[url] = res;
              return newObj;
            })
          );
          return result;
        }, {});
        break;
      default:
    }
  }

  const btnName = ['매출추이', '주차별', '채널별'];

  useEffect(() => {
    setProductNum(atomSelectedEachRowNum);
    setProductName(atomSelectedEachRowName);
  }, [atomSelectedEachRowNum, atomSelectedEachRowName]);

  useEffect(() => {
    isProductSelected && getData(currentID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productNum, currentID]);

  const CONDITION_RESULTS = {
    매출추이: <ConditionSalesResult />,
    주차별: <ConditionWeeklyResult />,
    채널별: <ConditionChannelsResult />,
  };

  return (
    <ConditionContainer>
      <InputContainer>
        <ProductNum value={productNum} onChange={handleProductNum} readOnly />
        <ProductName
          value={productName}
          onChange={handleProductName}
          readOnly
        />
      </InputContainer>
      <ConditionBtnContainer>
        {btnName.map((btnItem, idx) => {
          return (
            <ConditionBtn
              key={btnItem + idx}
              onClick={() => clickHandler(btnItem)}
              btnItem={btnItem}
              currentID={currentID}
              pointColors={themeContext.pointColors}
              monoColors={themeContext.monoColors}
            >
              {btnItem}
            </ConditionBtn>
          );
        })}
      </ConditionBtnContainer>

      <Content>{CONDITION_RESULTS[currentID]} </Content>
    </ConditionContainer>
  );
}

const ConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-basis: 2%;
  gap: 10px;
`;

const ProductNum = styled.input.attrs({ placeholder: 'ProductNum' })`
  padding: 5px;
  border-radius: 4px;
  width: 48%;
`;

const ProductName = styled.input.attrs({ placeholder: 'ProductName' })`
  padding: 5px;
  border-radius: 4px;
  width: 48%;
`;

const ConditionBtnContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-basis: 2%;
  margin-top: 12px;
  gap: 10px;
`;

const ConditionBtn = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  ${props => {
    const isBtnClicked = props.currentID === props.btnItem;
    return isBtnClicked
      ? `background-color:${props.pointColors.blue}; color:white;`
      : 'background-color:white;';
  }}

  &:hover {
    background-color: ${props => props.pointColors.blue};
    color: white;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 96%;
`;
