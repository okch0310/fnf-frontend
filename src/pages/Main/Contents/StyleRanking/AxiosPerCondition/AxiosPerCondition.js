import React from 'react';
import styled from 'styled-components';

import Condition from './Condition/Condition';

export default function AxiosPerCondition() {
  return (
    <ConditionWrapper>
      <Condition />
    </ConditionWrapper>
  );
}

const ConditionWrapper = styled.section`
  width: 100%;
  flex-basis: 22%;
  text-align: center;
`;
