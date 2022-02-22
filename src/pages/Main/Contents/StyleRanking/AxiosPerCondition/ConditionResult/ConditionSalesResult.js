import React from 'react';
import styled from 'styled-components';

import DomesticCharts from './SalesResultCharts/DomesticCharts';
import GlobalCharts from './SalesResultCharts/GlobalCharts';
import DomesticPieCharts from './SalesResultCharts/DomesticPieCharts';

export default function ConditionSalesResult() {
  return (
    <SalesResultContainer>
      <ChartsContainer>
        <DomesticCharts />
        <GlobalCharts />
        <DomesticPieCharts />
      </ChartsContainer>
    </SalesResultContainer>
  );
}

const SalesResultContainer = styled.div`
  width: 100%;
  height: 98%;
  margin-top: 12px;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 96%;
  gap: 12px;
`;
