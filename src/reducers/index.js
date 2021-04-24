import checkBoxes from "./checkBoxes"
import searchInput from "./searchInput"
import sorting from "./sorting"
import { combineReducers } from "redux"

const allreducers = combineReducers({
  checkBoxes,
  searchInput,
  sorting
})

export default allreducers
