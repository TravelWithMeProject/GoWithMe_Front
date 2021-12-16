import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "redux-saga";
import rootReducer, { RootState } from "./reducers";
import rootSaga from "./sagas";
import { 
  createStore, 
  compose, 
  applyMiddleware,
  Middleware, 
  StoreEnhancer, 
  Store, 
  AnyAction 
} from "redux";

const initialState = {};

interface SagaStore extends Store<RootState, AnyAction> {
  sagaTask: Task;
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return compose(applyMiddleware(...middleware));
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, initialState, bindMiddleware([...middleware]));
(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

export default store;