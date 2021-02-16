import { createStore, applyMiddleware,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import reducers from "../reducers";
import logger from 'redux-logger'
import axios from 'axios';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { getAccounts } from "../actions/Accounts";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, ReduxThunk,logger]
const reduxOfflineConfig = {
  ...offlineConfig,
  discard: (error: { response: any; }, action: any, retries: number) => {
    const { response } = error;
    return (response && response.status >= 400) || retries > 10;
  },
};
const config = {
  effect: (effect: any, action: { type: any; }) => {
    console.log(`Executing effect for ${action.type}`);
    const { url, ...options } = effect;
    const res = axios({
        url: url,
        ...options
      }).then(function (response) {
        return Promise.resolve(response.data.results);
      })
      .catch(function (error) {
          throw(error);
      });
      return res
  }
}

export const store = createStore(
  reducers,
 compose(
  applyMiddleware(...middleWares),
  offline(config))
)

export type RootReducers = ReturnType<typeof reducers>


