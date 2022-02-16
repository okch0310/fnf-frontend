import styled from 'styled-components';

export default function StyleHierarchyTree() {
  return <TreeWrapper>Wrapper</TreeWrapper>;
}

const TreeWrapper = styled.section`
  flex-basis: 3%;
  //flex-basis:22%;
  text-align: center;
`;
