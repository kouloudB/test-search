import { Dispatch } from "redux"

export const offlineSearch = (
    keyword: string,
    cache_name: string, 
    cache_request: string, 
    action_type: string) => {
    return async (dispatch: Dispatch) => {
    const cache = await caches.open(cache_name);
    cache.match(cache_request)
    .then(response=>{ 
       return response?.json()
    .then(({ results})=>{
        const filteredData = results.filter(( item: any) =>{
            return item.city.includes(keyword)
        });
        dispatch({
            type: action_type,
            payload: filteredData,
        });
    })
   })
    
    }
}
  
