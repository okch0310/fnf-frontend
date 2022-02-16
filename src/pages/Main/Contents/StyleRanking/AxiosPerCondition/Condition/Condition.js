import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import ConditionSalesResult from '../ConditionResult/ConditionSalesResult';
import ConditionWeeklyResult from '../ConditionResult/ConditionWeeklyResult';
import ConditionChannelsResult from '../ConditionResult/ConditionChannelsResult';
import ConditionColorsResult from '../ConditionResult/ConditionColorsResult';
import ConditionColorsMapResult from '../ConditionResult/ConditionColorsMapResult';

export default function Condition() {
  const themeContext = useContext(ThemeContext);

  const [currentID, setCurrentID] = useState(1);

  const clickHandler = id => {
    setCurrentID(id);
  };

  const btnName = ['매출추이', '주차별', '채널별', '컬러별', '컬러map'];

  const CONDITION_RESULTS = {
    매출추이: <ConditionSalesResult />,
    주차별: <ConditionWeeklyResult />,
    채널별: <ConditionChannelsResult />,
    컬러별: <ConditionColorsResult />,
    컬러map: <ConditionColorsMapResult />,
  };

  return (
    <ConditionContainer>
      <InputContainer>
        <ProductNum />
        <ProductName />
      </InputContainer>
      <ConditionBtnContainer>
        {btnName.map((btnItem, idx) => {
          return (
            <ConditionBtn
              key={btnItem + idx}
              onClick={() => clickHandler(btnItem)}
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
  flex-basis: 2%;
  margin-top: 12px;
  gap: 10px;
`;

const ConditionBtn = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  background-color: white;

  &:hover {
    background-color: ${props => props.pointColors.blue};
    color: white;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 96%;
`;
