import checkBoxes from "./checkBoxes"
import searchInput from "./searchInput"
import sorting from "./sorting"
import isLoading from "./isLoading"
import searchResult from "./searchResult"
import menuSelect from "./menuSelect"
import { combineReducers } from "redux"

const allreducers = combineReducers({
  checkBoxes,
  searchInput,
  sorting,
  isLoading,
  searchResult,
  menuSelect
})

export default allreducers
