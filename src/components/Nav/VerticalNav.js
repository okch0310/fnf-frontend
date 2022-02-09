import React, { useState, useContext } from 'react';

import { useLocation } from 'react-router-dom';

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

import styled, { ThemeContext } from 'styled-components';

import VerticalCategoryNav from './VerticalNavContents/VerticalCategoryNav';

const SIDE_COMPONENTS = {
  '/category': <VerticalCategoryNav />,
  '/styleranking': '',
};

export default function VerticalNav() {
  const themeContext = useContext(ThemeContext);
  const location = useLocation();

  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <NavWrapper
      isNavActive={isNavActive}
      backgroundColors={themeContext.backgroundColors}
    >
      <NavToggleButton onClick={toggleNav} monoColors={themeContext.monoColors}>
        {isNavActive ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
      </NavToggleButton>

      <NavContainer toggleNav={isNavActive}>
        {SIDE_COMPONENTS[location.pathname]}
      </NavContainer>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  position: fixed;
  width: 6vw;
  height: 100vh;
  padding-top: 5px;
  background-color: ${props => props.backgroundColors.backColor};
  transition: transform 0.5s ease-in-out;
  transform: ${props =>
    props.isNavActive ? 'translateX(0)' : 'translateX(-6vw)'};
  font-size: 1.2vw;
  z-index: 3;
`;

const NavContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 500;
`;

const NavToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 1.8vw;
  height: 3.6vh;
  border-radius: 50%;
  top: 48vh;
  left: 5.6vw;
  background-color: ${props => props.monoColors.black};
  color: #fff;
  z-index: 501;
  cursor: pointer;
`;
