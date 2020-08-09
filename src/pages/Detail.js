import React, { useState, useEffect } from "react";
import { Cards, Chart } from "../component";
import { useParams } from "react-router-dom";
import { globalData } from "../api";
import { Container, Typography } from "@material-ui/core";

export default function Detail() {
  const [dataCountry, setDataCountry] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      const result = await globalData(id);
      setDataCountry(result);
    };
    fetchData(id);
  }, []);

  console.log(dataCountry);

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Covid-19 tracker
      </Typography>
      <Cards data={dataCountry} />
      {/* <Chart /> */}
    </Container>
  );
}
