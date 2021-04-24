import styled from "styled-components"

const SearchBar = () => {
  return (
    <SearchContent>
      <label>Search by:* </label>
      <input type="text"/>
    </SearchContent>
  )
}


const SearchContent = styled.div`
  background: #161B22;
  padding: 1rem;
  border: 1px solid #30363d;
`



export default SearchBar
