import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { covidTypes } from "@redux/actionTypes/covid";
import { APIS_URL } from "@api/urls";

interface Payload {
  country?: string
}

interface Action {
  type: string;
  payload: Payload;
}

// GET CovidLiveCountry
function getCovidLiveCountryAPI(payload: Payload) {
  const { country } = payload;
  return axios.get(`${APIS_URL.covidLiveCountry.url}/${country}`);
}

function* getCovidLiveCountry(action: Action) {
  try {
    const result: AxiosResponse = yield call(getCovidLiveCountryAPI, action.payload);

    yield put({
      type: covidTypes.COVID_GET_LIVE_COUNTRY_SUCCESS,
      data: result.data
    });
  } catch (err: any) {
    const { response } = err;

    yield put({
      type:  covidTypes.COVID_GET_LIVE_COUNTRY_FAILURE,
      error: response.data
    });
  }
}

// watch
function* watchGetCovidLiveCountry() {
  yield takeLatest(covidTypes.COVID_GET_LIVE_COUNTRY_REQUEST, getCovidLiveCountry);
}

export default function* covidSaga() {
  yield all([
    fork(watchGetCovidLiveCountry),
  ]);
}