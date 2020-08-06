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
  data: {
    cases,
    recovered,
    deaths,
    todayCases,
    todayDeaths,
    todayRecovered,
    active,
    updated,
  },
}) {
  const classes = useStyle();

  return (
    <Grid container spacing={3} style={{ marginTop: "1rem" }}>
      <Grid item xs={12} md={6}>
        <Card className={classes.confirmed} elevation={0}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {cases === undefined ? (
                <Skeleton variant="text" />
              ) : (
                "Konfirmasi kasus"
              )}
            </Typography>
            <Typography variant="h5" className={classes.cardFont}>
              {cases === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={cases}
                  separator={","}
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.cardFont}
              color="textSecondary"
            >
              {todayCases === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={todayCases}
                  separator={","}
                  duration={2}
                  prefix="+ "
                  suffix=" kasus"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.active} elevation={0}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {active === undefined ? <Skeleton variant="text" /> : "Dirawat"}
            </Typography>
            <Typography variant="h5" className={classes.cardFont} gutterBottom>
              {active === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={active}
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
        <Card className={classes.recovered} elevation={0}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {recovered === undefined ? (
                <Skeleton variant="text" />
              ) : (
                "Pasien sembuh"
              )}
            </Typography>
            <Typography variant="h5" className={classes.cardFont}>
              {recovered === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={recovered}
                  separator={","}
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.cardFont}
              color="textSecondary"
            >
              {todayRecovered === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={todayRecovered}
                  separator={","}
                  duration={2}
                  prefix="+ "
                  suffix=" kasus"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.death} elevation={0}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {deaths === undefined ? <Skeleton variant="text" /> : "Meninggal"}
            </Typography>
            <Typography variant="h5" className={classes.cardFont}>
              {deaths === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={deaths}
                  separator=","
                  duration={2}
                  suffix=" orang"
                />
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.cardFont}
              color="textSecondary"
            >
              {todayDeaths === undefined ? (
                <Skeleton variant="text" />
              ) : (
                <CountUp
                  start={0}
                  end={todayDeaths}
                  separator={","}
                  duration={2}
                  prefix="+ "
                  suffix=" kasus"
                />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="caption" color="textSecondary" align="center">
          {new Date(updated).toString()}
        </Typography>
      </Grid>
    </Grid>
  );
}
