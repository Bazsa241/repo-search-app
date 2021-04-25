import * as actions from "./actionTypes"

export const refresh = (input) => ({
  type: actions.REFRESH,
  payload: input
})

export const init = () => ({
  type: actions.INIT
})

export const check = (type) => ({
  type: type,
})

export const sortBy = (type) => ({
  type: type
})

export const orderBy = (type) => ({
  type: type
})

export const result = (result) => ({
  type: actions.SEARCH,
  payload: {
    result
  }
})

export const loading = () => ({
  type: actions.LOADING
})

export const notLoading = () => ({
  type: actions.NOT_LOADING
})

export const menuChoose = (type) => ({
  type: type
})

export const deleteResults = () => ({
  type: actions.DELETE_RESULTS
})