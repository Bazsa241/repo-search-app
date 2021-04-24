import styled from "styled-components"
import RadioBtn from "./RadioBtn"
import Repo from "./Repo"
import * as actions from "../actions/actionTypes"
import { useSelector } from "react-redux"
import { sortBy, orderBy } from "../actions/actions"




const SearchResult = () => {

  const order = useSelector(state => state.sorting.order)
  const sort = useSelector(state => state.sorting.sort)

  return (
    <ResultContainer>
      <div className="sort">
        <div className="sort-by">
          <p>Sort by: </p>
          <RadioBtn label="default" value={sort} actionType={actions.DEFAULT}
          action={sortBy}/>
          <RadioBtn label="stars" value={sort} actionType={actions.STARS} action={sortBy}/>
          <RadioBtn label="forks" value={sort} actionType={actions.FORKS} action={sortBy}/>
        </div>
        <div className="order-by">
          <p>Order by: </p>
          <RadioBtn label="desc" value={order} actionType={actions.DESC} action={orderBy}/>
          <RadioBtn label="asc" value={order} actionType={actions.ASC} action={orderBy}/>
        </div>
        <div className="total">
          <p>Total results: 1450</p>
        </div>
      </div>
      <div className="result">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>
    </ResultContainer>
  )
}


const ResultContainer = styled.div`
    /* background: #161B22; */
    padding: 1rem;
    /* border: 1px solid #30363d; */
    max-width: 1200px;
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
    }
  }


`

export default SearchResult
