import styled from 'styled-components';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

export default function SalesChannelTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">1row</StyledTableCell>
          <StyledTableCell align="center">1row</StyledTableCell>
          <StyledTableCell align="center">1row</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">1value</TableCell>
          <TableCell align="center">2value</TableCell>
          <TableCell align="center">3value</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const StyledTableCell = styled(TableCell)`
  background-color: black;
  color: #fff !important;
`;
