import styled from 'styled-components';

export default function StyleHierarchyTree() {
  return (
    <TreeWrapper>
      <CategoryDomainWrapper>카테고리</CategoryDomainWrapper>
      <ItemSeasonWrapper>아이템 / 시즌</ItemSeasonWrapper>
    </TreeWrapper>
  );
}

const TreeWrapper = styled.section`
  display: flex;
  flex-basis: 3%;
  //flex-basis:22%;
  text-align: center;
`;

const CategoryDomainWrapper = styled.div`
  flex-basis: 1.5%;
`;

const ItemSeasonWrapper = styled.div`
  flex-basis: 1.5%;
`;
