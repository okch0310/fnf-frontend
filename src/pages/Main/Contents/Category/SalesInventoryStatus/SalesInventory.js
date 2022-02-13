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
      <InventoryEach>
        <ContentCard children={<SalesInventoryChart />} />
      </InventoryEach>
      <InventoryEach>
        <ContentCard children={<SalesInventoryTable />} />
      </InventoryEach>
      <InventoryEach>
        <ContentCard children={<SalesPerformanceTable />} />
      </InventoryEach>

      <InventoryEach>
        <ContentCard children={<SalesPerformanceSeasonTable />} />
      </InventoryEach>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const InventoryEach = styled.div`
  height: 24%;
`;
