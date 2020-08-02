import React from "react";
import { Cards, DataTable } from "../component";
import { Container, Typography } from "@material-ui/core";
import { globalData } from "../api";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    const result = await globalData();
    this.setState({ data: result });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Covid-19 tracker
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Laporan kasus penyebaran covid-19 di seluruh dunia
        </Typography>
        <Cards data={data} />
        <DataTable />
      </Container>
    );
  }
}
