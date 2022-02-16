import React from 'react';
import styled from 'styled-components';
import { dataStringFormatter } from '../../../../../../../utils/Functions';

import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const channelsData = [
  {
    shopcode: '429',
    shop_nm: '롯데면세소공',
    anal_dist_type_nm: '면세점',
    asp: 35704.0,
    sale_qty: 3248,
    stock_qty: 5009,
    woi: 2.0,
    ac_sale_qty: 238763,
  },
  {
    shopcode: '8001',
    shop_nm: '무신사(제휴몰)',
    anal_dist_type_nm: '온라인',
    asp: 35037.0,
    sale_qty: 2516,
    stock_qty: 1568,
    woi: 1.0,
    ac_sale_qty: 182413,
  },
];

const repeatTableRowCell = [
  '코드',
  '매장명',
  '채널',
  '실판가',
  '수량',
  '누적판매수량',
  '재고',
  'WOI',
];

export default function CodeTables() {
  return (
    <CodeTable>
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
        {channelsData.map(
          ({
            shopcode,
            shop_nm,
            anal_dist_type_nm,
            asp,
            sale_qty,
            ac_sale_qty,
            stock_qty,
            woi,
          }) => {
            const shopnm = dataStringFormatter(shop_nm);
            const analdisttypenm = dataStringFormatter(anal_dist_type_nm);
            const Asp = dataStringFormatter(asp);
            const saleqty = dataStringFormatter(sale_qty);
            const acsaleqty = dataStringFormatter(ac_sale_qty);
            const stockqty = dataStringFormatter(stock_qty);
            const Woi = dataStringFormatter(woi);
            return (
              <TableRow key={shopcode}>
                <StyledTableCell component="th" scope="row" align="left">
                  {shopcode}
                </StyledTableCell>
                <StyledTableCell align="center">{shopnm}</StyledTableCell>
                <StyledTableCell align="center">
                  {analdisttypenm}
                </StyledTableCell>
                <StyledTableCell align="center">{Asp}</StyledTableCell>
                <StyledTableCell align="center">{saleqty}</StyledTableCell>
                <StyledTableCell align="center">{acsaleqty}</StyledTableCell>
                <StyledTableCell align="center">{stockqty}</StyledTableCell>
                <StyledTableCell align="center">{Woi}</StyledTableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </CodeTable>
  );
}
const CodeTable = styled.div`
  flex-basis: 50%;
  border-radius: 4px;
  overflow: auto;
  word-break: keep-all;
  background-color: #fff;
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
    fontSize: '10px',
    fontWeight: 500,
    color: '#31415F',
    borderBottom: '1px solid #efefef',
  },
})(TableCell);
