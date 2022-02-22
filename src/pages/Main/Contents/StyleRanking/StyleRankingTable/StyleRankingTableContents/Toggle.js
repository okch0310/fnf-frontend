import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import styled from 'styled-components';
export default function Toggle({ name, srdata }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggler = e => {
    setIsOpen(!isOpen);
  };

  const columns =
    name === 'Top20 Summary'
      ? [
          { field: '구분', flex: 1, headerAlign: 'left', align: 'left' },
          { field: '판매액', flex: 1, type: 'number' },
          {
            field: '매출비중',
            flex: 1,
            type: 'number',
            valueFormatter: params => {
              const valueFormatted = Number(params.value).toLocaleString();
              return `${valueFormatted} %`;
            },
          },
          { field: '평균판매가', flex: 1, type: 'number' },
          { field: '한국판매수', flex: 1, type: 'number' },
          { field: '재고수량', flex: 1, type: 'number' },
          { field: '재고주수', flex: 1, type: 'number' },
        ]
      : [
          { field: '판매액', flex: 1, type: 'number' },
          { field: '판매량', flex: 1, type: 'number' },
          { field: '실판가', flex: 1, type: 'number' },
          { field: '국내', flex: 1, type: 'number' },
          { field: '면세', flex: 1, type: 'number' },
          { field: 'RF도매', flex: 1, type: 'number' },
          { field: '물류재고', flex: 1, type: 'number' },
          { field: '총재고', flex: 1, type: 'number' },
          { field: '재고주수', flex: 1, type: 'number' },
        ];

  return (
    <ToggleWrapper isOpen={isOpen}>
      <ToggleBtn isOpen={isOpen} onClick={handleToggler}>
        {name}
      </ToggleBtn>
      <TogglePage isOpen={isOpen}>
        {srdata && (
          <DataGrid
            rows={srdata.data}
            columns={columns}
            components={{ Footer: () => '' }}
            rowHeight={24}
            scrollbarSize={17}
          />
        )}
      </TogglePage>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => (props.isOpen ? '20%' : '3%')};
  background-color: #fff;
  overflow: hidden;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  flex-basis: ${props => (props.isOpen ? '15%' : '100%')};
  border: 1px solid;
  border-color: #adadad #adadad #adadad transparent;
  background-color: ${props => (props.isOpen ? '#ccc' : '#ddd')};
  font-weight: ${props => (props.isOpen ? '700' : '400')};
  cursor: pointer;
`;

const TogglePage = styled.div`
  flex-basis: ${props => (props.isOpen ? '85%' : '0%')};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  border: 1px solid;
  border-color: transparent #adadad #adadad transparent;
  overflow: hidden;
`;
