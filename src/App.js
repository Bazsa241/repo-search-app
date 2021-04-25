import Header from "./components/Header"
import Search from "./components/Search"
import History from "./components/History"
import {useSelector} from "react-redux"
import * as actions from "./actions/actionTypes"

function App() {

  const menu = useSelector(state => state.menuSelect)
  const showSearch = menu === actions.SEARCH_MENU
  const showHistory = menu === actions.HISTORY_MENU

  return (
    <div className="App">
      <Header />
      {
        showSearch && <Search />
      }
      {
        showHistory && <History />
      }      
    </div>
  );
}

export default App;
