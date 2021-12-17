import { combineReducers } from "redux";
import counter from './counterReducer';
import covid from './covidReducer';

const rootReducer = combineReducers({
  counter,
  covid
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;