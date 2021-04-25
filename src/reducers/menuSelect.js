import * as actions from "../actions/actionTypes"

const menuSelect = (state = actions.SEARCH_MENU, action) => {
  switch(action.type) {
    case actions.SEARCH_MENU:
      return action.type
    case actions.HISTORY_MENU:
      return action.type
    default:
      return state
  }
}

export default menuSelect
