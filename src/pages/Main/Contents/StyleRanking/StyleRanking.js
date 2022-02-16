import styled from 'styled-components';
import HorizonNav from '../../../../components/Nav/HorizonNav';
import AxiosPerCondition from './AxiosPerCondition/AxiosPerCondition';
import StyleHierarchyTree from './StyleHierarchyTree/StyleHierarchyTree';
import StyleRankingTable from './StyleRankingTable/StyleRankingTable';
export default function StyleRanking() {
  return (
    <>
      <HorizonNav />
      <StyleRankingWrapper>
        <StyleHierarchyTree />
        <StyleRankingTable />
        <AxiosPerCondition />
      </StyleRankingWrapper>
    </>
  );
}

const StyleRankingWrapper = styled.section`
  width: 100%;
  height: 94.8vh;
  display: flex;
`;
