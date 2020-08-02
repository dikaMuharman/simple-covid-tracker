import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table arial-label="Covid-19 by country">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Konfirmasi kasus</TableCell>
            <TableCell></TableCell>
            <TableCell>Country</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
