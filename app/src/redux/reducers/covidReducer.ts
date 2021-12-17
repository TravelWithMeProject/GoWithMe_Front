import { CovidActions, covidTypes } from "@redux/actionTypes/covid";
import { CovidState } from "@redux/types/covid";

const initialState: CovidState = {
  data: [],
  loading: false,
  done: false,
  error: "",
};

const CovidReducer = (
  state: CovidState = initialState,
  action: CovidActions
): CovidState => {
  switch(action.type) {
    case covidTypes.COVID_GET_LIVE_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case covidTypes.COVID_GET_LIVE_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        done: true,
        data: action.data
      };
    case covidTypes.COVID_GET_LIVE_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default CovidReducer;