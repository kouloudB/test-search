import { Dispatch } from "redux"

export const onlineSearch = (url: string, keyword: string, action_type: string) => {
    return (dispatch: Dispatch) => {
      fetch(url)
      .then(response => response.json())
      .then(({ results}) => {
          dispatch({
              type: action_type,
              payload: results,
            });
      })
    }
}
  
