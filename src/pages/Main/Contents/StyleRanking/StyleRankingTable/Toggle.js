import React, { useState } from 'react';
import styled from 'styled-components';

export default function Toggle() {
  const [isPageOpen, setIsPageOpen] = useState(false);
  console.log(isPageOpen);
  function OpenPage() {
    setIsPageOpen(!isPageOpen);
  }
  return (
    <>
      <ToggleWrapper>
        <ToggleBtn onClick={OpenPage} />
      </ToggleWrapper>
      <TogglePage value={isPageOpen} />
    </>
  );
}

const ToggleWrapper = styled.div``;

const ToggleBtn = styled.div`
  height: 40px;
  background-color: pink;
  padding-bottom: 20px;
`;

const TogglePage = styled.div`
  height: 200px;
  background-color: skyblue;
  padding-bottom: 10px;
  display: ${props => (props.value ? 'block' : 'none')};
`;
