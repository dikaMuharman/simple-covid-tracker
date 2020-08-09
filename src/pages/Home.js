import React from "react";
import { Cards, DataTable } from "../component";
import { Container, Typography } from "@material-ui/core";
import { globalData, caseByCountry } from "../api";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalData: {},
      countryCase: [],
    };
  }

  async fetchData() {
    const globalCase = await globalData();
    const { data } = await caseByCountry();
    this.setState({ globalData: globalCase, countryCase: data });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { globalData, countryCase } = this.state;

    return (
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Covid-19 tracker
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Laporan kasus penyebaran covid-19 di seluruh dunia
        </Typography>
        <Cards data={globalData} />
        <DataTable data={countryCase} />
      </Container>
    );
  }
}
