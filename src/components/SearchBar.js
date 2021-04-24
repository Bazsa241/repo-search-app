import styled, {css} from "styled-components"
import CheckBox from "./CheckBox"

const SearchBar = () => {
  return (
    <SearchContent>
      <label>Search by:* </label>
      <input type="text"
             placeholder="Search for..."
      />
      <label>In: </label>
      <CheckBox label="name"/>
      <CheckBox label="description"/>
      <CheckBox label="readme"/>
      <Button>Search</Button>
      <Button yellow>Reset</Button>
    </SearchContent>
  )
}

// #8b949e
// #c9d1d9

const SearchContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #161B22;
  padding: 1rem;
  border: 1px solid #30363d;
  
  input {
    margin-right: 1rem;
    background: #0d1117;
    border: none;
    padding: 3px;
    color: #c9d1d9;
    border-radius: 3px;
    border: 1px solid #30363d;
    transition: box-shadow .2s linear,
                border .2s linear;

    &:focus {
      outline: none;
      border: 1px solid #388bfd;
      box-shadow: 0px 0px 0px 3px #0c2d6b;
    }
  }
`

const Button = styled.button`
  background: #238636;
  cursor: pointer;
  padding: 3px 12px;
  border-radius: 3px;
  border: 1px solid;
  border-color: #2ea043;
  color: #e1e6eb;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  
  &:hover {
    background: #2ea043;
    border-color: #3fb950;
  }
  
  ${props => props.yellow && css`
    background: #959502;
    border-color: #b9b907;

    &:hover {
      background: #b9b907;
      border-color: #d4d407;
    }
  `}

  &:active {
    border-color: #6e7681
  }
`



export default SearchBar
