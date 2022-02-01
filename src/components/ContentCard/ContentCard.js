import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';

export default function ContentCard({ children, staticMaxWidth }) {
  return (
    <CardWrapper>
      <CardContainer staticMaxWidth={staticMaxWidth}>
        <Scrollbars autoHeight autoHeightMax="400px">
          {children}
        </Scrollbars>
      </CardContainer>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  max-width: ${props =>
    props.staticMaxWidth > 0 ? `${props.staticMaxWidth}px` : 'max-content'};
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
`;
