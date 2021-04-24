import styled from "styled-components"
import dummyPng from "./tmp/dummy.png"

const Repo = () => {
  return (
    <RepoContent>
      <div className="name">
        <h3>Repo name</h3>
        <p>Repo full name</p>
      </div>
      <div className="stars-watchers">
        <p>Stars: 5</p>
        <p>Watchers: 5</p>
      </div>
      <div className="forks-issues">
        <p>Forks: 5</p>
        <p>Issues: 5</p>
      </div>
      <div className="description">
        <p>Repo description text here...</p>
      </div>
      <div className="languages">
        <p>JavaScript</p>
        <p>HTML</p>
      </div>
      <div className="create-update">
        <p>Created at: 2016.12.12</p>
        <p>Updated at: 2016.12.12</p>
      </div>
      <div className="owner">
        <p>By: owner name</p>
      </div>
      <a href="/" className="picture">
        <img src={dummyPng} alt="profile"/>
      </a>
    </RepoContent>
  )
}

const RepoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  margin-top: 1rem;
  border-top: 1px solid #30363d;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: .8rem;
    min-height: 2.5rem;
  }

  .name {

    h3 {
      font-size: 1rem;
    }

    /* p {
      font-size: .9rem;
    } */
  }

  /* .stars-watchers,
  .forks-issues {
    font-size: .8rem;
  } */

  .description {
    flex-grow: 1;
  }
  
  .languages {
    flex-grow: 1;
    flex-wrap: wrap;
  }

  /* .create-update {
    font-size: .8rem;
  } */

  .owner {
    justify-content: center;
  }

  .picture {
    display: block;
    height: 4rem;
    padding: .5rem 0;
    
    img {
      border-radius: 3px;
      max-height: 100%;
    }
  }
`


export default Repo
