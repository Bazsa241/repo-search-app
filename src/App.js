import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResult from "./components/SearchResult"
import LoadingMask from "./components/LoadingMask"


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      {/* <SearchResult /> */}
      <LoadingMask />
    </div>
  );
}

export default App;
