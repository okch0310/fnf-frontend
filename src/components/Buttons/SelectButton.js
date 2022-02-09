import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

export default function SelectButton({ getStatistics }) {
  const themeContext = useContext(ThemeContext);

  return (
    <Buttons
      onClick={getStatistics}
      monoColors={themeContext.monoColors}
      cardColors={themeContext.cardColors}
      pointColors={themeContext.pointColors}
    >
      검색
    </Buttons>
  );
}

const Buttons = styled.button`
  width: 70px;
  height: 27px;
  color: ${props => props.monoColors.deepGray};
  background-color: white;
  border: 1px solid ${props => props.cardColors.borderSmoke};
  border-radius: 4px;
  font-size: 16px;

  :hover {
    color: white;
    background-color: ${props => props.pointColors.green};
    border: none;
    border-radius: 4px;
  }
`;
