import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";
import { green, red, amber } from "@material-ui/core/colors";

const useStyles = makeStyles({
  recovered: {
    backgroundColor: green[200],
  },
  deaths: {
    backgroundColor: red[200],
  },
  confirmed: {
    backgroundColor: amber[200],
  },
});

export default function DataTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Negara</TableCell>
            <TableCell align="right">Total case</TableCell>
            <TableCell align="right">New case</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">Recovery</TableCell>
            <TableCell align="right">New recovery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow hover={true} key={row.countryInfo._id}>
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  value={row.cases}
                  thousandSeparator={true}
                  displayType="text"
                />
              </TableCell>
              <TableCell
                align="right"
                className={row.todayCases != 0 ? classes.confirmed : []}
              >
                {row.todayCases != 0 ? (
                  <NumberFormat
                    value={row.todayCases}
                    thousandSeparator={true}
                    displayType="text"
                    prefix="+ "
                  />
                ) : (
                  " "
                )}
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  value={row.deaths}
                  thousandSeparator={true}
                  displayType="text"
                />
              </TableCell>
              <TableCell
                align="right"
                className={row.todayDeaths != 0 ? classes.deaths : []}
              >
                {row.todayDeaths != 0 ? (
                  <NumberFormat
                    value={row.todayCases}
                    thousandSeparator={true}
                    displayType="text"
                    prefix="+ "
                  />
                ) : (
                  " "
                )}
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  value={row.recovered}
                  thousandSeparator={true}
                  displayType="text"
                />
              </TableCell>
              <TableCell
                align="right"
                className={row.todayRecovered != 0 ? classes.recovered : []}
              >
                {row.todayRecovered != 0 ? (
                  <NumberFormat
                    value={row.todayCases}
                    thousandSeparator={true}
                    displayType="text"
                    prefix="+ "
                  />
                ) : (
                  " "
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
