import axios from "axios";
const url = "https://api.thevirustracker.com/free-api";

export const globalData = async () => {
  try {
    const {
      data: {
        results: [a],
      },
    } = await axios.get(`${url}?global=stats`);
    console.log(a);
    return a;
  } catch (error) {
    console.log(error);
  }
};
