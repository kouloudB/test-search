import { Dispatch } from "redux"
import {  GET_ACCOUNTS, AccountActionTypes, GET_ACCOUNTS_ROLLBACK, GET_ACCOUNTS_COMMIT} from "../types/Account"

export const getAccounts = (url: string) => ({
  type: 'GET_ACCOUNTS',
  payload: [],
  meta: {
    offline: {
      effect: { url: url, method: 'GET'},
      commit: { type: GET_ACCOUNTS, meta: {} }
    }
  }
  });
  
