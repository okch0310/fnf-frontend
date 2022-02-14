import React from 'react';
import { useRecoilValue } from 'recoil';
import { staticData } from '../../../../../atom/staticData';
import { Card } from '../../../../../components/ContentCard/ContentCard';
import SearchWeeklyTable from './SearchWeeklyTable';
import SearchSelectedTable from './SearchSelectedTable';
import SearchCompetitorChart from './SearchCompetitorChart';
import SearchNormalChart from './SearchNormalChart';
import SearchOwnChart from './SearchOwnChart';
import styled from 'styled-components';
import PageTitle from '../../../../../components/PageTitle/PageTitle';

export default function SearchStatus() {
  const atomStaticData = useRecoilValue(staticData);

  return (
    <Wrapper>
      <PageTitle title="마켓검색량" />
      <SearchDataViews>
        <TableWrapper>
          <UpperWrapper>
            <CustomContentCard
              children={
                <SearchWeeklyTable
                  data={atomStaticData.searchCountTableWeekly.data}
                />
              }
            />
          </UpperWrapper>
          <BottomWrapper>
            <CustomContentCard
              children={
                <SearchSelectedTable
                  data={atomStaticData.searchCountTablePeriod.data}
                />
              }
            />
          </BottomWrapper>
        </TableWrapper>
        <ChartWrapper>
          <UpperWrapper>
            <CustomContentCard
              children={
                <SearchNormalChart
                  data={atomStaticData.searchCountTimeseriesOverall.data}
                />
              }
            />
            <CustomContentCard
              children={
                <SearchOwnChart
                  data={atomStaticData.searchCountTimeseriesBrand.data}
                />
              }
            />
          </UpperWrapper>
          <BottomWrapper>
            <CustomContentCard
              children={
                <SearchCompetitorChart
                  data={atomStaticData.searchCountTimeseriesCompetitors.data}
                />
              }
            />
          </BottomWrapper>
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

const SearchDataViews = styled.div`
  display: flex;
  height: 90vh;
  gap: 2vw;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 2vh;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  gap: 2vh;
`;

const CustomContentCard = styled(Card)`
  padding: 0;
`;

const UpperWrapper = styled.div`
  display: flex;
  height: 46%;
  gap: 2vw;
`;

const BottomWrapper = styled.div`
  display: flex;
  height: 46%;
`;
