import { covidTypes } from "@redux/actionTypes/covid";

export const covidRequest = () => ({
  type: covidTypes.COVID_GET_REQUEST,
});
