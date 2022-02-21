import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

export default function SelectButton({ type, value, click }) {
  const themeContext = useContext(ThemeContext);
  return (
    <Buttons
      type={type}
      value={value}
      onClick={click}
      monoColors={themeContext.monoColors}
      cardColors={themeContext.cardColors}
      pointColors={themeContext.pointColors}
    >
      {value}
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

  ${({ type }) => {
    switch (type) {
      case 'search':
        return css`
          &:hover {
            color: white;
            background-color: ${props => props.pointColors.green};
            border: none;
            border-radius: 4px;
          }
        `;
      case 'reset':
        return css`
          &:hover {
            color: white;
            background-color: #ee4c58;
            border: none;
            border-radius: 4px;
          }
        `;
      default:
        break;
    }
  }}
`;
