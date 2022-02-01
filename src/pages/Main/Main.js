import React from 'react';
import styled from 'styled-components';
import SalesChannelStatus from '../SalesChannelStatus/SalesChannelStatus';

const Main = () => {
  return (
    <MainWrapper>
      <SalesChannelStatus />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  background-color: lightgrey;
`;

export default Main;
