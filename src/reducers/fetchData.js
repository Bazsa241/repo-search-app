import {result, loading, notLoading, deleteResults} from "../actions/actions"
import * as actions from "../actions/actionTypes"
import buildURL from "../utils/buildURL"

const fetchData = () => async (dispatch, getState) => {
  dispatch(loading())
  dispatch(deleteResults(actions.DELETE_RESULTS))
  const URL = buildURL(getState())
  const res = await fetch(URL).then(data => data.json())  
  dispatch(result(res))
  dispatch(notLoading())
}

export default fetchData