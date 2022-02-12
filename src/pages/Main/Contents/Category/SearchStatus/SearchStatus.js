import React from 'react';
import ContentCard from '../../../../../components/ContentCard/ContentCard';
import SearchWeeklyTable from './SearchWeeklyTable';
import SearchSelectedTable from './SearchSelectedTable';
import SearchCompetitorChart from './SearchCompetitorChart';
import SearchNormalChart from './SearchNormalChart';
import SearchOwnChart from './SearchOwnChart';
import styled from 'styled-components';

export default function SearchStatus() {
  return (
    <Wrapper>
      <SearchDataTitle>마켓검색량</SearchDataTitle>
      <SearchDataViews>
        <TableWrapper>
          <ContentCard children={<SearchWeeklyTable />} />
          <ContentCard children={<SearchSelectedTable />} />
        </TableWrapper>
        <ChartWrapper>
          <NormalOwnChartWrapper>
            <ContentCard children={<SearchNormalChart />} />
            <ContentCard children={<SearchOwnChart />} />
          </NormalOwnChartWrapper>
          <CompetitorChartWrapper>
            <ContentCard children={<SearchCompetitorChart />} />
          </CompetitorChartWrapper>
        </ChartWrapper>
      </SearchDataViews>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1vw;
`;

const SearchDataTitle = styled.div`
  height: 5.2vh;
  font-size: 36px;
`;

const SearchDataViews = styled.div`
  display: flex;
  height: 90vh;
  gap: 2vw;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const NormalOwnChartWrapper = styled.div`
  display: flex;
  height: 48%;
  gap: 2vw;
`;

const CompetitorChartWrapper = styled.div`
  display: flex;
  height: 45%;
`;
