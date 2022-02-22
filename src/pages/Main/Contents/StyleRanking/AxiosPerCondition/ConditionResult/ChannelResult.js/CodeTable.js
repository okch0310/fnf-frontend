import React, { useEffect, useState } from 'react';

import { conditionData } from '../../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { dataStringFormatter } from '../../../../../../../utils/Functions';

import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
  const [tableData, setTableData] = useState();
  const atomConditionData = useRecoilValue(conditionData);

  useEffect(() => {
    if (
      atomConditionData !== false &&
      atomConditionData !== undefined &&
      atomConditionData.shops !== undefined
    ) {
      setTableData(atomConditionData.shops.data);
    }
  }, [atomConditionData]);

  return (
    <CodeTable>
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
                    <StyledTableCell align="center">
                      {acsaleqty}
                    </StyledTableCell>
                    <StyledTableCell align="center">{stockqty}</StyledTableCell>
                    <StyledTableCell align="center">{Woi}</StyledTableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </>
      )}
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
