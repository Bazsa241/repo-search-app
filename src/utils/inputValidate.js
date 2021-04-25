const inputValidate = (state) => {
  const input = state.searchInput.trim().length > 2
  const checkboxes = state.checkBoxes.name
                  || state.checkBoxes.readme
                  || state.checkBoxes.description
  return checkboxes && input
}

export default inputValidate