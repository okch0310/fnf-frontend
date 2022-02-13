import styled from 'styled-components';

import SearchEachChart from './SearchEachChart';

export default function SearchCharts({ data }) {
  return (
    <SearchEachChartWrapper>
      <SearchEachChart chartName="일반" data={data.NormalChartData} />
      <SearchEachChart chartName="MLB" data={data.OwnChartData} />
    </SearchEachChartWrapper>
  );
}

const SearchEachChartWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
`;
