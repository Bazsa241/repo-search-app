import * as actions from "../actions/actionTypes"

const isLoading = (state = false, action) => {
  switch(action.type) {
    case actions.LOADING:
      return true
    case actions.NOT_LOADING:
      return false
    default:
      return state    
  }
}

export default isLoading
