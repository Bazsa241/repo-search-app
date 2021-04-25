import * as actions from "../actions/actionTypes"

const searchInput = (state = "", action) => {
  switch(action.type) {
    case actions.REFRESH:
      return action.payload
    case actions.INIT:
      return ""
    default:
      return state
  }
}

export default searchInput
