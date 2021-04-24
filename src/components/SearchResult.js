import styled from "styled-components"


const SearchResult = () => {
  return (
    <ResultContainer>
      <div className="sort">
        <div className="sort-by">
          <p>Sort by: </p>
          <input type="radio" name="sort" id="default"/>
          <label htmlFor="default">default</label>
          <input type="radio" name="sort" id="stars"/>
          <label htmlFor="stars">stars</label>
          <input type="radio" name="sort" id="forks"/>
          <label htmlFor="forks">forks</label>
        </div>
        <div className="order-by">
          <p>Order by: </p>
          <input type="radio" name="order" id="desc"/>
          <label htmlFor="desc">desc</label>
          <input type="radio" name="order" id="asc"/>
          <label htmlFor="asc">asc</label>
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
