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
import Typography from "@material-ui/core/Typography";
import { green, red, amber } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

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
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Negara</TableCell>
            <TableCell align="right">Total case</TableCell>
            <TableCell align="right" style={{ padding: "0 8px" }}>
              New cases
            </TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">Recovery</TableCell>
            <TableCell align="right">New recovery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow hover={true} key={i}>
              <TableCell component="th" scope="row">
                <Link to={`/detail/${row.countryInfo.iso2}`}>
                  {row.country}
                </Link>
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
                className={row.todayCases !== 0 ? classes.confirmed : ""}
              >
                {row.todayCases !== 0 ? (
                  <NumberFormat
                    value={row.todayCases}
                    thousandSeparator={true}
                    displayType="text"
                    prefix="+ "
                    renderText={(value) => (
                      <Typography
                        variant="body2"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {value}
                      </Typography>
                    )}
                    // style={{ whiteSpace: "nowrap" }}
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
                className={row.todayDeaths !== 0 ? classes.deaths : ""}
              >
                {row.todayDeaths !== 0 ? (
                  <NumberFormat
                    value={row.todayDeaths}
                    thousandSeparator={true}
                    displayType="text"
                    prefix="+ "
                  />
                ) : (
                  " "
                )}
              </TableCell>
              <TableCell align="right">
                {row.recovered !== 0 ? (
                  <NumberFormat
                    value={row.recovered}
                    thousandSeparator={true}
                    displayType="text"
                  />
                ) : (
                  <Typography>N/A</Typography>
                )}
              </TableCell>
              <TableCell
                align="right"
                className={row.todayRecovered !== 0 ? classes.recovered : ""}
              >
                {row.todayRecovered !== 0 ? (
                  <NumberFormat
                    value={row.todayRecovered}
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
