import { CovidData } from "@redux/types/covid";

// Covid 액션 타입
export const covidTypes = {
  COVID_GET_REQUEST: "COVID_GET_REQUEST",
  COVID_GET_SUCCESS: "COVID_GET_SUCCESS",
  COVID_GET_FAILURE: "COVID_GET_FAILURE",
} as const;

// Covid 액션 생성 함수 인터페이스
interface covidGetRequest {
  type: typeof covidTypes.COVID_GET_REQUEST,
}

interface covidGetSuccess {
  type: typeof covidTypes.COVID_GET_SUCCESS,
  data: CovidData[];
}

interface covidGetFailure {
  type: typeof covidTypes.COVID_GET_FAILURE,
  error: string;
}

// Actions
export type CovidActions = 
  covidGetRequest |
  covidGetSuccess |
  covidGetFailure;