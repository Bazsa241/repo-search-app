import * as actions from "../actions/actionTypes"

const init = {
  name: "in:name",
  readme: "",
  description: ""
}

const checkBoxes = (state = init, action) => {
  switch(action.type) {
    case actions.NAME:
      return {
        ...state,
        name: state.name ? "" : "in:name"
      }
    case actions.README:
      return {
        ...state,
        readme: state.readme ? "" : "in:readme"
      }
    case actions.DESCRIPTION:
      return {
        ...state,
        description: state.description ? "" : "in:description"
      }
    case actions.INIT:
      return {
        name: "in:name",
        readme: "",
        description: ""
      }
    default:
      return state
  }
}

export default checkBoxes