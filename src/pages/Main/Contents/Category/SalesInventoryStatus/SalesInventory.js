import React from 'react';
import SalesInventoryChart from './SalesInventoryChart';
import ContentCard from '../../../../../components/ContentCard/ContentCard';
import SalesInventoryTable from './SalesInventoryTable';
import SalesPerformanceTable from './SalesPerformanceTable';
import SalesPerformanceSeasonTable from './SalesPerformanceSeasonTable';
import styled from 'styled-components';

export default function SalesInventory() {
  return (
    <InventoryWrapper>
      <ContentCard children={<SalesInventoryChart />} />
      <ContentCard children={<SalesInventoryTable />} />
      <ContentCard children={<SalesPerformanceTable />} />
      <ContentCard children={<SalesPerformanceSeasonTable />} />
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
