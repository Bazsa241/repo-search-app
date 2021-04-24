import styled from "styled-components"
import { useDispatch } from "react-redux"
import {check} from "../actions/actions"

const CheckBox = ({label, value, action}) => {

  const dispatch = useDispatch()
  const checking = () => {
    dispatch(check(action))
  }

  return (
    <ChkBox>
      <input type="checkbox"
             name={label}
             id={label}
             checked={value}
             onChange={checking}
      />
      <label htmlFor={label}>
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </label>
      <p onClick={checking}>{label}</p>
    </ChkBox>
  )
}

const ChkBox = styled.div`
  display: flex;
  align-items: center;

  p {
    cursor: pointer;
    padding-left: .5rem;
    user-select: none;
  }

  input {
    display: none;

    &:checked {
      &+label {
        transform: rotate(45deg);

        span {
          background: limegreen;          
        }

        .top {
          transform: rotate(90deg) translateX(6px);
        }

        .left {
          transform: rotate(90deg) translateY(-6px);
        }
    
        .bottom {
          transform: rotate(-90deg) translateX(6px);
        }
        
        .right {
          transform: rotate(-90deg) translateY(-6px);
        }
      }
    }
  }

  label {
    position: relative;
    cursor: pointer;
    display: block;
    width: 14px;
    height: 14px;
    transition: transform .15s linear;

    span {
      position: absolute;
      display: block;
      background: white;
      transition: transform .15s linear,
                  background .15s linear
      ;
    }

    .top {
      width: 14px;
      height: 2px;
      top: 0;
    }

    .left {
      width: 2px;
      height: 14px;
      left: 0;
    }
    
    .bottom {
      width: 14px;
      height: 2px;
      bottom: 0;
    }
    
    .right {
      width: 2px;
      height: 14px;
      right: 0;
    }
  }
`

export default CheckBox
