import React from 'react';
import styled from 'styled-components';
import TopSummary from './TopSummary';
export default function TotalResult() {
  return (
    <TotalResultWrapper>
      <TopSummary />
    </TotalResultWrapper>
  );
}

const TotalResultWrapper = styled.div`
  // height: 100px;
`;
