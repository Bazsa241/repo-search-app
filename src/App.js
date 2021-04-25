import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResult from "./components/SearchResult"
import LoadingMask from "./components/LoadingMask"
import {useSelector} from "react-redux"

function App() {

  const isLoading = useSelector(state => state.isLoading)
  const hasResult = useSelector(state => state.searchResult).items.length > 0
  const showResult = hasResult && !isLoading

  return (
    <div className="App">
      <Header />
      <SearchBar />
      {
        isLoading && <LoadingMask />
      }
      {
        showResult && <SearchResult />
      }    
    </div>
  );
}

export default App;
