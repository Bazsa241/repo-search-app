import * as actions from "./actionTypes"

export const refresh = (input) => ({
  type: actions.REFRESH,
  payload: {
    input
  }
})

export const init = () => ({
  type: actions.INIT
})