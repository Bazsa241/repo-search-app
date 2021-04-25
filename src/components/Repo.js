import styled from "styled-components"
import dummyPng from "./tmp/dummy.png"
import dateFormatter from "../utils/dateFormatter"


// TODO: languages,

const Repo = ({repo}) => {

  const created = dateFormatter(repo.created_at)
  const updated = dateFormatter(repo.updated_at)

  return (
    <RepoContent>
      <div className="name">
        <h3>{repo.name}</h3>
        <a href={repo.html_url} target="_blank"><p>{repo.full_name}</p></a>
      </div>
      <div className="stars-watchers">
        <p>Stars: {repo.stargazers_count}</p>
        <p>Watchers: {repo.watchers}</p>
      </div>
      <div className="forks-issues">
        <p>Forks: {repo.forks}</p>
        <p>Issues: {repo.open_issues}</p>
      </div>
      <div className="description">
        <p>{repo.description}</p>
      </div>
      <div className="languages">
        <p>{repo.language}</p>
      </div>
      <div className="create-update">
        <p>Created at: {created}</p>
        <p>Updated at: {updated}</p>
      </div>
      <div className="owner">
        <p>By: {repo.owner.login}</p>
      </div>
      <a href={repo.owner.html_url} target="_blank" className="picture">
        <img src={repo.owner.avatar_url} alt="avatar"/>
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

  a {
    text-decoration: none;
    color: #ddd; 
  }

  .name {

    h3 {
      font-size: 1rem;
    }

    /* p {
      font-size: .9rem;
    } */
  }

  .stars-watchers,
  .forks-issues {
    max-width: 10%;
  }

  .description {
    max-width: 23%;
  }
  
  .languages {
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
