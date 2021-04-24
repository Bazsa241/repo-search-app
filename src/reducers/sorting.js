import * as actions from "../actions/actionTypes"

const init = {
  sort: "",
  order: "desc",
}

const sorting = (state = init, action) => {
  switch(action.type) {
    case actions.DEFAULT:
      return {
        ...state,
        sort: ""
      }
    case actions.STARS:
      return {
        ...state,
        sort: "stars"
      }
    case actions.FORKS:
      return {
        ...state,
        sort: "forks"
      }
    case actions.DESC:
      return {
        ...state,
        order: "desc"
      }
    case actions.ASC:
      return {
        ...state,
        order: "asc"
      }
    case actions.INIT:
      return {
        sort: "",
        order: "desc"
      }
    default:
      return state
  }
}

export default sorting
