import * as actions from "../actions/actionTypes"

const searchResult = (state = {total:0, items:[]}, action) => {
  switch(action.type) {
    case actions.SEARCH:
      return action.payload.result.total_count
        ? {
          total: action.payload.result.total_count,
          items: action.payload.result.items
        }
        : state
    case actions.INIT:
      return {
        total: 0,
        items: []
      }
    default:
      return state
  }
}

export default searchResult
