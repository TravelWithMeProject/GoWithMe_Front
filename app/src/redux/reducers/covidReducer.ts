import { CovidActions, covidTypes } from "@redux/actionTypes/covid";
import { CovidState } from "@redux/types/covid";

const initialState: CovidState = {
  LiveData: [],
  AllCountryData: [],
  LiveLoading: false,
  LiveDone: false,
  LiveError: "",
  AllCountryLoading: false,
  AllCountryDone: false,
  AllCountryError: "",
};

const CovidReducer = (
  state: CovidState = initialState,
  action: CovidActions
): CovidState => {
  switch(action.type) {
    case covidTypes.COVID_GET_LIVE_REQUEST:
      return {
        ...state,
        LiveLoading: true,
      };
    case covidTypes.COVID_GET_LIVE_SUCCESS:
      return {
        ...state,
        LiveLoading: false,
        LiveDone: true,
        LiveData: action.data
      };
    case covidTypes.COVID_GET_LIVE_FAILURE:
      return {
        ...state,
        LiveLoading: false,
        LiveError: action.error,
      };
    case covidTypes.COVID_GET_ALL_COUNTRY_REQUEST:
      return {
        ...state,
        AllCountryLoading: true,
      };
    case covidTypes.COVID_GET_ALL_COUNTRY_SUCCESS:
      return {
        ...state,
        AllCountryLoading: false,
        AllCountryDone: true,
        AllCountryData: action.data
      };
    case covidTypes.COVID_GET_ALL_COUNTRY_FAILURE:
      return {
        ...state,
        AllCountryLoading: false,
        AllCountryError: action.error,
      };
    default:
      return state;
  }
}

export default CovidReducer;