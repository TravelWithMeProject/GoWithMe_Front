import { all, fork } from 'redux-saga/effects';
import covidSaga from './covidSaga';

export default function* rootSaga() {
  yield all([
    fork(covidSaga),
  ]);
}