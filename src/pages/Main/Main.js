import React from 'react';
import { useLocation } from 'react-router-dom';

import { isSideNavActive } from '../../atom/sideNav';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';

import HorizonNav from '../../components/Nav/HorizonNav';
import Category from './Contents/Category/Category';
import StyleRanking from './Contents/StyleRanking/StyleRanking';

const COMPONENTS_BY_LOCATION = {
  '/category': <Category />,
  '/styleranking': <StyleRanking />,
};

const Main = () => {
  const location = useLocation();
  const atomIsSideNavActive = useRecoilValue(isSideNavActive);

  return (
    <MainWrapper isSideNavActive={atomIsSideNavActive}>
      <HorizonNav />
      {COMPONENTS_BY_LOCATION[location.pathname]}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  width: ${props => (props.isSideNavActive ? '90vw' : '96vw')};
  height: 100vh;
  transform: ${props =>
    props.isSideNavActive ? 'translateX(10vw)' : 'translateX(4vw)'};
  transition: width 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

export default Main;
