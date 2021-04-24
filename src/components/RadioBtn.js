import styled from "styled-components"
import {useState} from "react"

const RadioBtn = ({label}) => {

  const [checked, setChecked] = useState(false)

  return (
    <Radio>
      <input type="radio" id="" checked={checked}/>
      <label htmlFor={label} onClick={() => setChecked(!checked)}></label>
      <p onClick={() => setChecked(!checked)}>{label}</p>
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
