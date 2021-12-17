import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { covidTypes } from "@redux/actionTypes/covid";
import { APIS_URL } from "@api/urls";


// GET Covid
function getCovidAPI() {
  return axios.get(APIS_URL.covid.url);
}

function* getCovid() {
  try {
    const result: AxiosResponse = yield call(getCovidAPI);

    yield put({
      type: covidTypes.COVID_GET_SUCCESS,
      data: result.data
    });
  } catch (err: any) {
    const { response } = err;

    yield put({
      type:  covidTypes.COVID_GET_SUCCESS,
      error: response.data
    });
  }
}

// watch
function* watchGetCovid() {
  yield takeLatest(covidTypes.COVID_GET_REQUEST, getCovid);
}

export default function* covidSaga() {
  yield all([
    fork(watchGetCovid),
  ]);
}