import React from 'react';
import styled from 'styled-components';
import ChannelTables from './ChannelResult.js/ChannelTable';
import CodeTables from './ChannelResult.js/CodeTable';

export default function ConditionChannelsResult() {
  return (
    <ChannelContainer>
      <ChannelTables />
      <CodeTables />
    </ChannelContainer>
  );
}

const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 21vw;
  height: 98%;
  margin-top: 12px;
  gap: 5px;
`;
