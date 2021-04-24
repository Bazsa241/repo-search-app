import styled, {css} from "styled-components"
import {useState} from "react"

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <HeaderContent>
      <h1>Repo Search App</h1>
      <nav>
        <ul className="menu">
          <li>Search</li>
          <li>History</li>
        </ul>
        <Burger open={open} onClick={() => setOpen(!open)}>
          <span className="top"></span>
          <span className="bottom"></span>
        </Burger>
        <DropDown open={open}>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Mobile</li>
        </DropDown>
      </nav>
    </HeaderContent>
  )
}

const HeaderContent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
  background: #161B22;
  border-bottom: 1px solid #30363d;
  
  nav {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;

    .menu {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 1rem;

      li {
        cursor: pointer;
        padding: .5rem 0;
        border-bottom: 2px solid white;
      }
    }
  }
`

const Burger = styled.div`
  cursor: pointer;

  span {
    display: block;
    background-color: white;
    width: 30px;
    height: 2px;
    margin: 6px;
    transition: transform .2s linear,
                background .2s linear;
  }

  ${props => props.open && css`
    span {
      background-color: red;
    }

    .top {
      margin-bottom: -2px;
      transform: rotate(45deg)
    }
    
    .bottom {
      margin-top: -2px;
      transform: rotate(-45deg)
    }
  `}
`

const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  right: -200px;
  top: 4rem;
  padding: 1.5rem 2rem;
  border: 1px solid #30363d;
  background: #161B22;
  list-style: none;
  z-index: 10;
  transition: right .2s linear;

  li {
    cursor: pointer;
  }

  ${props => props.open && css`
    right: 22px;
  `}
`

export default Header
