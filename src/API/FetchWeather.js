import axios from "axios";
const URL = "http://maps.openweathermap.org/data/2.5/weather";
const API_KEY = "1de7d65214e552d476e96ae5ddf8593d";

export const FetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
export default FetchWeather;
