import React, { useState, useEffect } from 'react';

import { conditionData } from '../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';
import { dataStringFormatter } from '../../../../../../utils/Functions';

import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const repeatTableRowCell = [
  '주차',
  '입고수량',
  '해외출고',
  '사입출고',
  '국내판매',
  '면세판매',
  'RF도매판매',
  '재고',
];

export default function ConditionWeeklyResult() {
  const [tableData, setTableData] = useState();
  const atomConditionData = useRecoilValue(conditionData);

  useEffect(() => {
    if (atomConditionData) {
      setTableData(atomConditionData.data);
    }
  }, [atomConditionData]);

  return (
    <WeeklyContainer>
      {tableData && (
        <>
          <TableRow>
            {repeatTableRowCell.map((cellItem, idx) => {
              return (
                <TableRowCell align="left" key={idx}>
                  {cellItem}
                </TableRowCell>
              );
            })}
          </TableRow>
          <TableBody>
            {tableData.map(
              (
                {
                  end_dt,
                  stor_qty_kor,
                  delv_qty_exp,
                  delv_qty_outlet,
                  sale_qty_kor_retail,
                  sale_qty_kor_duty,
                  sale_qty_kor_rfwholesale,
                  stock_qty_kor,
                },
                idx
              ) => {
                const storqtykor = dataStringFormatter(stor_qty_kor);
                const delvqtyexp = dataStringFormatter(delv_qty_exp);
                const delvqtyoutlet = dataStringFormatter(delv_qty_outlet);
                const saleqtykorretail =
                  dataStringFormatter(sale_qty_kor_retail);
                const saleqtykorduty = dataStringFormatter(sale_qty_kor_duty);
                const saleqtykorrfwholesale = dataStringFormatter(
                  sale_qty_kor_rfwholesale
                );
                const stockqtykor = dataStringFormatter(stock_qty_kor);
                return (
                  <TableRow key={idx}>
                    <StyledTableCell component="th" scope="row" align="left">
                      {end_dt}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {storqtykor}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {delvqtyexp}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {delvqtyoutlet}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {saleqtykorretail}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {saleqtykorduty}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {saleqtykorrfwholesale}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {stockqtykor}
                    </StyledTableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </>
      )}
    </WeeklyContainer>
  );
}

const WeeklyContainer = styled.div`
  flex: 1;
  height: 90%;
  width: 20vw;
  margin-top: 12px;
  border-radius: 4px;
  word-break: keep-all;
  background-color: white;
  overflow: auto;
`;

const TableRowCell = withStyles({
  root: {
    fontSize: '12px',
    fontWeight: 500,
    backgroundColor: '#377ef9',
    color: 'white',
    borderBottom: '1px solid #efefef',
  },
})(TableCell);

const StyledTableCell = withStyles({
  root: {
    fontSize: '11px',
    fontWeight: 500,
    color: '#31415F',
    borderBottom: '1px solid #efefef',
  },
})(TableCell);
