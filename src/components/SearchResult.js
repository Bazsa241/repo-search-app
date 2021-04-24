import styled from "styled-components"
import RadioBtn from "./RadioBtn"


const SearchResult = () => {
  return (
    <ResultContainer>
      <div className="sort">
        <div className="sort-by">
          <p>Sort by: </p>
          <RadioBtn label="default"/>
          <RadioBtn label="stars"/>
          <RadioBtn label="forks"/>
        </div>
        <div className="order-by">
          <p>Order by: </p>
          <RadioBtn label="desc"/>
          <RadioBtn label="asc"/>
        </div>
        <div className="total">
          <p>Total results: 1450</p>
        </div>
      </div>
      <div className="result">
        
      </div>
    </ResultContainer>
  )
}


const ResultContainer = styled.div`
    background: #161B22;
    padding: 1rem;
    border: 1px solid #30363d;

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
