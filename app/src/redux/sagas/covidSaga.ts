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

// GET CovidLive
function getCovidLiveAPI(payload: Payload) {
  const { country } = payload;
  return axios.get(`${APIS_URL.covidLive.url}/${country}`);
}

function* getCovidLive(action: Action) {
  try {
    const result: AxiosResponse = yield call(getCovidLiveAPI, action.payload);

    yield put({
      type: covidTypes.COVID_GET_LIVE_SUCCESS,
      data: result.data
    });
  } catch (err: any) {
    const { response } = err;

    yield put({
      type:  covidTypes.COVID_GET_LIVE_FAILURE,
      error: response.data
    });
  }
}

// GET CovidLive
function getCovidAllCountryAPI() {
  return axios.get(`${APIS_URL.covidAllCountry.url}`);
}

function* getCovidAllCountry() {
  try {
    const result: AxiosResponse = yield call(getCovidAllCountryAPI);

    yield put({
      type: covidTypes.COVID_GET_ALL_COUNTRY_SUCCESS,
      data: result.data
    });
  } catch (err: any) {
    const { response } = err;

    yield put({
      type:  covidTypes.COVID_GET_ALL_COUNTRY_FAILURE,
      error: response.data
    });
  }
}

// watch
function* watchGetCovidLive() {
  yield takeLatest(covidTypes.COVID_GET_LIVE_REQUEST, getCovidLive);
}
function* watchGetCovidAllCountry() {
  yield takeLatest(covidTypes.COVID_GET_ALL_COUNTRY_REQUEST, getCovidAllCountry);
}

export default function* covidSaga() {
  yield all([
    fork(watchGetCovidLive),
    fork(watchGetCovidAllCountry),
  ]);
}