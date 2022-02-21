import React, { useContext } from 'react';
import { HierarchyContext } from '../StyleRanking';

import styled from 'styled-components';
import TopSummary from './StyleRankingTableContents/TopSummary';
import SearchResult from './StyleRankingTableContents/SearchResult';
import TotalResult from './StyleRankingTableContents/TotalResult';

export default function StyleRankingTable() {
  const { expandCondition } = useContext(HierarchyContext);

  return (
    <RankingTableWrapper expandCondition={expandCondition}>
      <TopSummary />
      <SearchResult />
      <TotalResult />
    </RankingTableWrapper>
  );
}

const RankingTableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.expandCondition ? '56%' : '75%')};
  text-align: center;
  // flex-basis:56%;
`;
