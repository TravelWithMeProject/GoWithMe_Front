import { covidTypes } from "@redux/actionTypes/covid";

export const covidLiveRequest = (data: {
  country: string;
}) => ({
  type: covidTypes.COVID_GET_LIVE_REQUEST,
  payload: data,
});

export const covidAllCountryRequest = () => ({
  type: covidTypes.COVID_GET_ALL_COUNTRY_REQUEST
});
