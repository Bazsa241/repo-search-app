import styled, {css} from "styled-components"
import CheckBox from "./CheckBox"
import { useSelector, useDispatch } from "react-redux"
import { refresh, init } from "../actions/actions"
import * as actions from "../actions/actionTypes"
import fetchData from "../reducers/fetchData"
import inputValidate from "../utils/inputValidate"


const SearchBar = () => {

  const dispatch = useDispatch()
  const input = useSelector(state => state.searchInput)
  const name = useSelector(state => state.checkBoxes.name)
  const readme = useSelector(state => state.checkBoxes.readme)
  const description = useSelector(state => state.checkBoxes.description)
  const state = useSelector(state => state)
  const valid = inputValidate(state)

  const keyDown = (e) => {
    if(e.key === "Enter") {
      onLoad()
    }
  }

  const onInit = () => {
    dispatch(init())
  }

  const onLoad = () => {
    valid && dispatch(fetchData())
  }

  return (
    <SearchContent>
      <label>Search by:* </label>
      <input type="text"
             placeholder="Search for..."
             value={input}
             onChange={(e) => dispatch(refresh(e.target.value))}
             onKeyDown={keyDown}
      />
      <label>In: </label>
      <CheckBox label="name"
                action={actions.NAME}
                value={name}
      />
      <CheckBox label="description"
                action={actions.DESCRIPTION}
                value={description}
      />
      <CheckBox label="readme"
                action={actions.README}
                value={readme}
      />
      <Button onClick={onLoad}>Search</Button>
      <Button yellow onClick={onInit}>Reset</Button>
      {
        !valid &&
        <small className="warning">
          The input field must have a minimum of 3 characters and one check box selected
        </small>
      }

    </SearchContent>
  )
}


const SearchContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #161B22;
  max-width: 1300px;
  padding: 1rem 1rem 2rem;
  border: 1px solid #30363d;
  margin: 0 auto 2rem;
  
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

  .warning {
    background-color: #a10000;
    color: white;
    font-weight: 500;
    position: absolute;
    bottom: .5rem;
    padding: 2px;
    border-radius: 5px;
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
