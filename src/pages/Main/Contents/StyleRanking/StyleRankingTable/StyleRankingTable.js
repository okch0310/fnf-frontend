import React, { useContext } from 'react';

import { styleRankingData } from '../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import { HierarchyContext } from '../StyleRanking';

import styled from 'styled-components';
import TopSummary from './StyleRankingTableContents/TopSummary';
import SearchResult from './StyleRankingTableContents/SearchResult';
import TotalResult from './StyleRankingTableContents/TotalResult';

export default function StyleRankingTable() {
  const { expandCondition } = useContext(HierarchyContext);
  const atomSRData = useRecoilValue(styleRankingData);

  return (
    <RankingTableWrapper expandCondition={expandCondition}>
      <TopSummary srdata={atomSRData.top20Summary} />
      <SearchResult srdata={atomSRData.top20List} />
      <TotalResult srdata={atomSRData.top20TotalSummary} />
    </RankingTableWrapper>
  );
}

const RankingTableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: ${props => (props.expandCondition ? '56%' : '75%')};
  flex-basis: ${props => (props.expandCondition ? '56%' : '75%')};
  text-align: center;
  padding-left: 1%;
`;
