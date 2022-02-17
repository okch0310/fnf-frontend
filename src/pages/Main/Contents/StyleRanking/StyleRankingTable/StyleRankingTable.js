import styled from 'styled-components';
import TopSummary from './TopSummary';
import SearchResult from './SearchResult';
import TotalResult from './TotalResult';
export default function StyleRankingTable() {
  return (
    <RankingTableWrapper>
      RankingTable
      <TopSummary />
      <SearchResult />
      <TotalResult />
    </RankingTableWrapper>
  );
}

const RankingTableWrapper = styled.section`
  flex-basis: 75%;
  text-align: center;
  // flex-basis:56%;
`;
