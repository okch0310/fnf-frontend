import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../atom/filterSelect';

export default function SerialNum({
  val,
  serialNumber,
  numberType,
  defaultValue,
}) {
  const [selectedFilter, setSelectedFilter] = useRecoilState(filterSelect);

  return (
    <SerialInput
      value={selectedFilter[val]}
      placeholder={serialNumber}
      type={numberType}
      onChange={e => {
        const prevState = { ...selectedFilter };

        prevState[val] = e.target.value;
        setSelectedFilter({ ...prevState });
      }}
    />
  );
}

const SerialInput = styled.input`
  margin: 0 5px;
  ${props => props.theme.calendarInput};

  &::placeholder {
    color: ${props => props.theme.monoColors.deepGray};
  }
`;
