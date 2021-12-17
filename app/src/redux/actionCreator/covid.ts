import { covidTypes } from "@redux/actionTypes/covid";

export const covidLiveCountryRequest = (data: {
  country: string;
}) => ({
  type: covidTypes.COVID_GET_LIVE_COUNTRY_REQUEST,
  payload: data,
});
