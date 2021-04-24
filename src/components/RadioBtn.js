import styled from "styled-components"
import {useState} from "react"

const RadioBtn = ({label}) => {

  const [checked, setChecked] = useState(false)

  return (
    <Radio>
      <input type="radio" id="" checked={checked}/>
      <label htmlFor={label}></label>
      <p onClick={() => setChecked(!checked)}>{label}</p>
    </Radio>
  )
}


const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  input {
    display: none;

    &:checked + label {
      background: limegreen;
      box-shadow: 0 0 3px 2px limegreen;
      border-color: #ffffff30
    }
  }

  label {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 2px solid white;
    border-radius: 50%;
  }

  p {
    cursor: pointer;
    user-select: none;
  }
`

export default RadioBtn
