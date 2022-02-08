import React from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import Category from './Contents/Category/Category';
import StyleRanking from './Contents/StyleRanking/StyleRanking';

const COMPONENTS_BY_LOCATION = {
  '/category': <Category />,
  '/styleranking': <StyleRanking />,
};

const Main = () => {
  const location = useLocation();

  return <MainWrapper>{COMPONENTS_BY_LOCATION[location.pathname]}</MainWrapper>;
};

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default Main;
