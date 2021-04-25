import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"
import LoadingMask from "./LoadingMask"
import {useSelector} from "react-redux"


const Search = () => {

  const isLoading = useSelector(state => state.isLoading)
  const hasResult = useSelector(state => state.searchResult).items.length > 0
  const showResult = hasResult && !isLoading

  return (
    <>
      <SearchBar />
      {
        isLoading && <LoadingMask />
      }
      {
        showResult && <SearchResult />
      }    
    </>
  )
}

export default Search