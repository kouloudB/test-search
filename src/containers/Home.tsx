import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootReducers } from '../store';
import { getAccounts } from '../actions/Accounts';
import { onlineSearch } from '../actions/OnlineSearch';
import { offlineSearch } from '../actions/OfflineSearch';
import { ACCOUNT_SEARCH_ONLINE, ACCOUNT_SEARCH_OFFLINE, GET_ACCOUNTS} from '../types/Account'
const url = "https://api.fda.gov/food/enforcement.json?limit=50";
const url2 = "https://motulvmo0ewtgpd9e.vms.hana.ondemand.com/dev/form/AccountSelection"

function Home() {
  const accounts = useSelector((state: RootReducers) => state.accountsReducer.accounts)
  const isConnected = useSelector((state: RootReducers) => state.accountsReducer.isConnected)
  const dispatch = useDispatch();
  const excludeColumns: string[] = [];
  const  [consCach, setConsCach]= useState('')

  const handleAccountsSearch = async (event : React.ChangeEvent<HTMLInputElement>)=>{
    if(isConnected){
      const cache = await caches.open('accounts-cache');
      cache.match(url2)
      .then(response=>{ 
        setConsCach(response==undefined? 'undefined': 'online data'+response?.toString())
         return response?.json()
      .then(({ results})=>{
         
      })})
      // dispatch(onlineSearch(
      //   url, 
      //   event.target.value, 
      //   ACCOUNT_SEARCH_ONLINE,
      //   ))
      console.log('>>> from API')
    }else{
      const cache = await caches.open('accounts-cache');
      cache.match(url2)
      .then(response=>{ 
        setConsCach(response==undefined? 'undefined': 'offline data'+response?.toString())
         return response?.json()
      .then(({ results})=>{
         
      })})
      // dispatch(offlineSearch(
      //   event.target.value, 
      //   'accounts-cache', 
      //   url,
      //   ACCOUNT_SEARCH_OFFLINE
      //   ))
      console.log('>>> from CACHE')
    }
       
  }
  useEffect(()=>{
    dispatch(getAccounts(url))
    
  }, [])
 
  return (
    <div style={{display:'flex', alignItems:'center', width: '100vw', flexDirection:'column'}}>
      <p>{isConnected? "online": "offline"}</p>
      <p>{"consCach  "+consCach}</p>
      <input type="text" onChange={handleAccountsSearch} />
        {/* <ul>
          {accounts.map(({city}, i)=> 
            <li key={i}>{city}</li>
          )}
        </ul> */}
    </div>
  );
}

export default Home;
