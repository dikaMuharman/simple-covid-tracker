import axios from "axios";
const url = "https://disease.sh/v3/covid-19/";

export const globalData = async (countries) => {
  try {
    let changeAbleUrl = `${url}all?yesterday=false&allowNull=true`;
    if (countries)
      changeAbleUrl = `${url}countries/${countries}?yesterday=false`;

    const {
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
    } = await axios.get(changeAbleUrl);
    // console.log(cases);
    return {
      cases,
      recovered,
      deaths,
      todayCases,
      todayDeaths,
      todayRecovered,
      active,
      updated,
    };
  } catch (error) {
    console.log(error);
  }
};

export const caseByCountry = async () => {
  try {
    const data = axios.get(
      `${url}countries?yesterday=false&sort=cases&allowNull=false`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
