import React, { useEffect, useState } from 'react';

import { conditionData } from '../../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';
import { dataStringFormatter } from '../../../../../../../utils/Functions';

import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const repeatTableRowCell = [
  '채널',
  '매장수',
  '매출비중',
  '실판가',
  '판매수량',
  '누적판매수량',
  '재고',
  'WOI',
];

export default function ChannelTables() {
  const [tableData, setTableData] = useState();
  const atomConditionData = useRecoilValue(conditionData);

  useEffect(() => {
    if (atomConditionData) {
      setTableData(atomConditionData.overall.data);
    }
  }, [atomConditionData]);

  return (
    <ChannelTable>
      {atomConditionData && tableData && (
        <>
          <TableRow>
            {repeatTableRowCell.map((cellItem, idx) => {
              return (
                <TableRowCell align="center" key={idx}>
                  {cellItem}
                </TableRowCell>
              );
            })}
          </TableRow>

          <TableBody>
            {tableData.map(
              (
                {
                  type_zone_nm,
                  shop_cnt,
                  ratio,
                  asp,
                  sale_qty,
                  ac_sale_qty,
                  shop_stock_qty,
                  woi,
                },
                idx
              ) => {
                const shopcnt = dataStringFormatter(shop_cnt);
                const Ratio = dataStringFormatter(ratio);
                const Asp = dataStringFormatter(asp);
                const saleqty = dataStringFormatter(sale_qty);
                const acsaleqty = dataStringFormatter(ac_sale_qty);
                const shopstockqty = dataStringFormatter(shop_stock_qty);
                const Woi = dataStringFormatter(woi);

                return (
                  <TableRow key={idx}>
                    <StyledTableCell component="th" scope="row" align="left">
                      {type_zone_nm}
                    </StyledTableCell>
                    <StyledTableCell align="center">{shopcnt}</StyledTableCell>
                    <StyledTableCell align="center">{Ratio}%</StyledTableCell>
                    <StyledTableCell align="center">{Asp}</StyledTableCell>
                    <StyledTableCell align="center">{saleqty}</StyledTableCell>
                    <StyledTableCell align="center">
                      {acsaleqty}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {shopstockqty}
                    </StyledTableCell>
                    <StyledTableCell align="center">{Woi}</StyledTableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </>
      )}
    </ChannelTable>
  );
}

const ChannelTable = styled.div`
  flex-basis: 50%;
  border-radius: 4px;
  overflow: auto;
  word-break: keep-all;
  background-color: #fff;
`;

const TableRowCell = withStyles({
  root: {
    position: 'sticky',
    top: 0,
    fontSize: '12px',
    fontWeight: 500,
    backgroundColor: '#377ef9',
    color: 'white',
    borderBottom: '1px solid #efefef',
  },
})(TableCell);

const StyledTableCell = withStyles({
  root: {
    fontSize: '10px',
    fontWeight: 500,
    color: '#31415F',
    borderBottom: '1px solid #efefef',
  },
})(TableCell);
