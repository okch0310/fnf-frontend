import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

export default function ContentCard({ children }) {
  // eslint-disable-next-line no-unused-vars
  const themeContext = useContext(ThemeContext);
  return <Card>{children}</Card>;
}

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px ${props => props.theme.cardColors.borderSmoke};
  background-color: ${props => props.theme.backgroundColors.backColor};
`;
