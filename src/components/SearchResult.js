import styled from "styled-components"
import RadioBtn from "./RadioBtn"
import Repo from "./Repo"
import * as actions from "../actions/actionTypes"
import { useSelector } from "react-redux"
import { sortBy, orderBy } from "../actions/actions"


const SearchResult = () => {

  const order = useSelector(state => state.sorting.order)
  const sort = useSelector(state => state.sorting.sort)
  const searchedRepos = useSelector(state => state.searchResult)

  return (
    <ResultContainer>
      <div className="sort">
        <div className="sort-by">
          <p>Sort by: </p>
          <RadioBtn label="default"
                    value={sort}
                    actionType={actions.DEFAULT}
                    action={sortBy}
          />
          <RadioBtn label="stars"
                    value={sort}
                    actionType={actions.STARS}
                    action={sortBy}
          />
          <RadioBtn label="forks"
                    value={sort}
                    actionType={actions.FORKS}
                    action={sortBy}
          />
        </div>
        <div className="order-by">
          <p>Order by: </p>
          <RadioBtn label="desc"
                    value={order}
                    actionType={actions.DESC}
                    action={orderBy}
          />
          <RadioBtn label="asc"
                    value={order}
                    actionType={actions.ASC}
                    action={orderBy}
          />
        </div>
        <div className="total">
          <p>Total results: <span>{searchedRepos.total}</span></p>
        </div>
      </div>
      <div className="result">
        {
          searchedRepos.items.map(repo => <Repo repo={repo} key={repo.id}/>)
        }
      </div>
    </ResultContainer>
  )
}


const ResultContainer = styled.div`
    padding: 1rem;
    max-width: 1300px;
    margin: 0 auto;

  .sort {
    display: flex;
    align-items: center;
    gap: 3rem;

    .sort-by, .order-by {
      display: flex;
      align-items: center;
      gap: .5rem;

      p {
        margin-right: 1rem;
      }
    }

    .total {
      flex-grow: 1;
      text-align: right;

      span {
        color: limegreen;
      }
    }
  }
`

export default SearchResult
