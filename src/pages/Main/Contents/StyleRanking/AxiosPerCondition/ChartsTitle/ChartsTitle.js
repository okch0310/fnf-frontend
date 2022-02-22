import styled from 'styled-components';

export default function ChartsTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  color: white;
  background-color: #377ef9;
  border-radius: 4px 4px 0 0;
  /* height: 5.2vh; */
`;
