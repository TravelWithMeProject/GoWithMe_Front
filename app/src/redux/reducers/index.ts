import { combineReducers } from "redux";
import covid from './covidReducer';

const rootReducer = combineReducers({
  covid
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;