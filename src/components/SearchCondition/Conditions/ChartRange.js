import React from 'react';
import styled from 'styled-components';
import CalendarElement from './Calendar/CalendarElement';

const ChartRange = () => {
  return (
    <ChartRangeContainer>
      <CalendarBlock>
        <CalendarElement value="startDate" />
      </CalendarBlock>
      <CalCoupler> ~ </CalCoupler>
      <CalendarBlock>
        <CalendarElement value="endDate" />
      </CalendarBlock>
    </ChartRangeContainer>
  );
};

const ChartRangeContainer = styled.div`
  display: flex;
`;

const CalendarBlock = styled.div`
  width: 100px;
`;

const CalCoupler = styled.span`
  padding: 0 10px;
  line-height: 25px;
  font-size: 15px;
  font-weight: bold;
`;

export default ChartRange;
