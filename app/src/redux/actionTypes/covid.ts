import { CovidData } from "@redux/types/covid";

// Covid 액션 타입
export const covidTypes = {
  COVID_GET_LIVE_COUNTRY_REQUEST: "COVID_GET_LIVE_COUNTRY_REQUEST",
  COVID_GET_LIVE_COUNTRY_SUCCESS: "COVID_GET_LIVE_COUNTRY_SUCCESS",
  COVID_GET_LIVE_COUNTRY_FAILURE: "COVID_GET_LIVE_COUNTRY_FAILURE",
} as const;

// Covid 액션 생성 함수 인터페이스
interface covidGetLiveCountryRequest {
  type: typeof covidTypes.COVID_GET_LIVE_COUNTRY_REQUEST,
}

interface covidGetLiveCountrySuccess {
  type: typeof covidTypes.COVID_GET_LIVE_COUNTRY_SUCCESS,
  data: CovidData[];
}

interface covidGetLiveCountryFailure {
  type: typeof covidTypes.COVID_GET_LIVE_COUNTRY_FAILURE,
  error: string;
}

// Actions
export type CovidActions = 
  covidGetLiveCountryRequest |
  covidGetLiveCountrySuccess |
  covidGetLiveCountryFailure;