import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CalendarElement from './Calendar/CalendarElement';

const WeeklyPerformance = ({ value }) => {
  return (
    <CalendarBlock>
      <CalendarElement value={value} />
    </CalendarBlock>
  );
};

const CalendarBlock = styled.div`
  width: 100px;
`;

export default WeeklyPerformance;
