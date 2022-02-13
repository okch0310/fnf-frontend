import ContentCard from '../../../../../../components/ContentCard/ContentCard';

import styled from 'styled-components';
import { SearchStatusData } from '../AllMockDatas';
import SearchCharts from './Search/SearchCharts';
import SearchCompetitorChart from './Search/SearchCompetitorChart';

export default function AllSearch() {
  return (
    <SearchWrapper>
      <SearchCompetitorWrapper>
        <ContentCard
          children={
            <SearchCompetitorChart
              data={SearchStatusData.CompetitorChartData}
            />
          }
        />
      </SearchCompetitorWrapper>

      <SearchChartAreaWrapper>
        <ContentCard children={<SearchCharts data={SearchStatusData} />} />
      </SearchChartAreaWrapper>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2vh;
`;
const SearchCompetitorWrapper = styled.div`
  width: 26vw;
  height: 50vh;
`;

const SearchChartAreaWrapper = styled.div`
  height: 32vh;
`;
