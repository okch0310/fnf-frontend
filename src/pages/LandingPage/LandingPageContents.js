import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styled, { ThemeContext } from 'styled-components';

const LANDING_NAME_OBJ = {
  category: ['Category', '/category'],
  styleRanking: ['Style Ranking', '/styleranking'],
};

export default function LandingPageContents({ name }) {
  // eslint-disable-next-line no-unused-vars
  const themeContext = useContext(ThemeContext);

  return (
    <CommonTextSection to={LANDING_NAME_OBJ[name][1]} name={name}>
      <CommonText>{LANDING_NAME_OBJ[name][0]}</CommonText>
    </CommonTextSection>
  );
}

const CommonTextSection = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100%;
  background-color: ${props => props.theme.backgroundColors.backColor};
  &:hover {
    background-color: ${props => props.theme.monoColors.gray};
  }
  cursor: pointer;
`;
const CommonText = styled.span`
  width: max-content;
  color: ${props => props.theme.monoColors.black};
  pointer-events: none;
`;
