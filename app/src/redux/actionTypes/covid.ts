import { CovidLiveData } from "@redux/types/covid";

// Covid 액션 타입
export const covidTypes = {
  COVID_GET_LIVE_REQUEST: "COVID_GET_LIVE_REQUEST",
  COVID_GET_LIVE_SUCCESS: "COVID_GET_LIVE_SUCCESS",
  COVID_GET_LIVE_FAILURE: "COVID_GET_LIVE_FAILURE",
  COVID_GET_ALL_COUNTRY_REQUEST: "COVID_GET_ALL_COUNTRY_REQUEST",
  COVID_GET_ALL_COUNTRY_SUCCESS: "COVID_GET_ALL_COUNTRY_SUCCESS",
  COVID_GET_ALL_COUNTRY_FAILURE: "COVID_GET_ALL_COUNTRY_FAILURE",
} as const;

// Covid 액션 생성 함수 인터페이스
interface covidGetLiveRequest {
  type: typeof covidTypes.COVID_GET_LIVE_REQUEST,
}

interface covidGetLiveSuccess {
  type: typeof covidTypes.COVID_GET_LIVE_SUCCESS,
  data: CovidLiveData[];
}

interface covidGetLiveFailure {
  type: typeof covidTypes.COVID_GET_LIVE_FAILURE,
  error: string;
}

interface covidGetAllCountryRequest {
  type: typeof covidTypes.COVID_GET_ALL_COUNTRY_REQUEST,
}

interface covidGetAllCountrySuccess {
  type: typeof covidTypes.COVID_GET_ALL_COUNTRY_SUCCESS,
  data: any;
}

interface covidGetAllCountryFailure {
  type: typeof covidTypes.COVID_GET_ALL_COUNTRY_FAILURE,
  error: string;
}

// Actions
export type CovidActions = 
  covidGetLiveRequest |
  covidGetLiveSuccess |
  covidGetLiveFailure |
  covidGetAllCountryRequest |
  covidGetAllCountrySuccess |
  covidGetAllCountryFailure;