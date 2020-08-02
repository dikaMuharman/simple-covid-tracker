import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/styles";
import { grey, amber, green, red } from "@material-ui/core/colors";
import CountUp from "react-countup";

const useStyle = makeStyles(() => ({
  cardFont: {
    fontWeight: 500,
  },
  confirmed: {
    borderLeft: `15px solid ${grey[500]}`,
    background: grey[100],
    color: grey[900],
  },
  active: {
    borderLeft: `15px solid ${amber[500]}`,
    background: amber[100],
    color: grey[900],
  },
  recovered: {
    borderLeft: `15px solid ${green[500]}`,
    background: green[100],
    color: grey[900],
  },
  death: {
    borderLeft: `15px solid ${red[500]}`,
    background: red[100],
    color: grey[900],
  },
}));

export default function Cards({
  data: { total_cases, total_recovered, total_unresolved, total_deaths },
}) {
  const classes = useStyle();

  return (
    <Grid container spacing={3} style={{ marginTop: "1rem" }}>
      <Grid item xs={12} md={6}>
        <Card className={classes.confirmed}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {total_cases === undefined ? (
                <Skeleton variant="text" />
              ) : (
                "Konfirmasi kasus"
              )}
            </Typography>
            <Typography variant="h5" className={classes.cardFont} gutterBottom>
              {total_cases === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={total_cases}
                  separator={","}
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.active}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {total_unresolved === undefined ? (
                <Skeleton variant="text" />
              ) : (
                "Dirawat"
              )}
            </Typography>
            <Typography variant="h5" className={classes.cardFont} gutterBottom>
              {total_unresolved === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={total_unresolved}
                  separator={","}
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.recovered}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {total_recovered === undefined ? (
                <Skeleton variant="text" />
              ) : (
                "Pasien sembuh"
              )}
            </Typography>
            <Typography variant="h5" className={classes.cardFont} gutterBottom>
              {total_recovered === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={total_recovered}
                  separator={","}
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.death}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {total_deaths === undefined ? (
                <Skeleton variant="text" />
              ) : (
                "Meninggal"
              )}
            </Typography>
            <Typography variant="h5" className={classes.cardFont} gutterBottom>
              {total_deaths === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={total_deaths}
                  separator=","
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
