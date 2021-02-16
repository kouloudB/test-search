export interface Account{
    results: Array<any>;
    city: string;
    address_1: string;
    [key: string]: string | number | object;
}

export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const GET_ACCOUNTS_COMMIT = "GET_ACCOUNTS_COMMIT"
export const GET_ACCOUNTS_ROLLBACK= "GET_ACCOUNTS_ROLLBACK"
export const OFFLINE_STATUS= "Offline/STATUS_CHANGED"
export const ACCOUNT_SEARCH_ONLINE= "ACCOUNT_SEARCH_ONLINE"
export const ACCOUNT_SEARCH_OFFLINE= "ACCOUNT_SEARCH_OFFLINE"

export interface GetAccountsAction {
    type: typeof GET_ACCOUNTS;
    payload: Account[]
}

export interface SearchAccountsOnlineAction {
    type: typeof ACCOUNT_SEARCH_ONLINE;
    payload: Account[]
}
export interface SearchAccountsOfflineAction {
    type: typeof ACCOUNT_SEARCH_OFFLINE;
    payload: Account[]
}
export interface GetOfflineAction {
    type: typeof OFFLINE_STATUS;
    payload: any 
}
export type AccountActionTypes =  GetAccountsAction | SearchAccountsOnlineAction | SearchAccountsOfflineAction | GetOfflineAction;