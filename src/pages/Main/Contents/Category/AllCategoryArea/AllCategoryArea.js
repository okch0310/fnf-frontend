import styled from 'styled-components';
import PageTitle from '../../../../../components/PageTitle/PageTitle';

export default function AllCategoryData() {
  return (
    <AllCategoryWrapper>
      <PageTitle title="전체 영역" />
    </AllCategoryWrapper>
  );
}

const AllCategoryWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
