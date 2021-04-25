const buildURL = (state) => {
  const baseURL = "https://api.github.com/search/repositories?q="
  const max = "&per_page=10"
  const order = "&order=" + state.sorting.order
  const sort = state.sorting.order ? "&sort=" + state.sorting.order : ""
  let queryString = encodeURIComponent(`${state.searchInput} ${state.checkBoxes.name}${state.checkBoxes.readme}${state.checkBoxes.description}`)

  queryString = queryString + order + sort + max
  return baseURL + queryString
}

export default buildURL
