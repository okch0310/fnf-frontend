import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

export default function TopSummary() {
  return (
    <TopSummaryWrapper>
      <Toggle />
    </TopSummaryWrapper>
  );
}

const TopSummaryWrapper = styled.div``;
