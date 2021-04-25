import styled from "styled-components"
import { useDispatch } from "react-redux"
import fetchData from "../reducers/fetchData"

const RadioBtn = ({label, value, actionType, action}) => {

  const dispatch = useDispatch()
  const onChangeHandler = () => {
    dispatch(action(actionType))
    dispatch(fetchData())
  }

  const checked = value === label || ( value === "" && label === "default" )

  return (
    <Radio>
      <input type="radio" checked={checked} onChange={onChangeHandler}/>
      <label htmlFor={label} onClick={onChangeHandler}></label>
      <p onClick={onChangeHandler}>{label}</p>
    </Radio>
  )
}


const Radio = styled.div`
  display: flex;
  align-items: center;

  input {
    display: none;

    &:checked + label {
      background: limegreen;
      box-shadow: 0 0 3px 2px limegreen;
      border-color: #ffffff30
    }
  }

  label {
    cursor: pointer;
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid white;
    border-radius: 50%;
  }

  p {
    cursor: pointer;
    padding-left: .5rem;
    user-select: none;
  }
`

export default RadioBtn
