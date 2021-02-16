import {  Account, AccountActionTypes, GET_ACCOUNTS, ACCOUNT_SEARCH_ONLINE, ACCOUNT_SEARCH_OFFLINE, OFFLINE_STATUS } from '../types/Account'
interface DefaultStateI{
  accounts: Account[] ,
  id: string,
  isConnected: boolean
}

const initialState: DefaultStateI = {
  accounts: [],
  id: '',
  isConnected: true
}

export default function orderReducer(
  state : DefaultStateI= initialState,
  action: AccountActionTypes
): DefaultStateI{
  switch (action.type) {
    case GET_ACCOUNTS: {
      return {
        ...state,
        accounts: action.payload,
        isConnected: true
      }
    }
    case ACCOUNT_SEARCH_ONLINE:{
      return {
        ...state,
        accounts: action.payload,
        isConnected: true
      }}
    case ACCOUNT_SEARCH_OFFLINE:{
      return {
        ...state,
        accounts: action.payload,
      }
     } 
     case OFFLINE_STATUS:{
      return {
        ...state,
        isConnected: action.payload.online
      }
     } 
     
    default:
      return state
  }
}