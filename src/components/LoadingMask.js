import styled from "styled-components"
// import run from "./tmp/run.gif"


const LoadingMask = () => {
  return (
    <Loading>
      {/* <img src={run} className="run"/> */}
      <div className="outer">
        <div className="inner"></div>
      </div>
    </Loading>
  )
}


const Loading = styled.div`
  /* position: relative;

  .run {
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  } */

  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 5rem auto;
    width: 300px;
    height: 300px;
    background: linear-gradient(90deg, rgba(226,77,3,1) 0%, rgba(226,187,7,1) 21%, rgba(9,226,23,1) 32%, rgba(11,226,169,1) 46%, rgba(15,160,225,1) 68%, rgba(167,17,225,1) 82%, rgba(224,13,67,1) 100%);
    animation: rotate 2.5s infinite linear;
  }

  .inner {
    border-radius: 50%;
    background: #0d1117;
    width: 270px;
    height: 270px;
  }

  @keyframes rotate {
    to {transform: rotate(360deg)}
  }
`

export default LoadingMask