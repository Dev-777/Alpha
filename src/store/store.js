import { applyMiddleware, createStore } from "redux";
import mainReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { authSaga } from "./sagas/authSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  mainReducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(authSaga);
