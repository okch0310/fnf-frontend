import styled from 'styled-components';

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.div`
  height: 5.2vh;
  font-size: 36px;
`;
