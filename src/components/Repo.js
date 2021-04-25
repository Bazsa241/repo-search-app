import styled from "styled-components"
import dateFormatter from "../utils/dateFormatter"
import fetchOther from "../utils/fetchOther"
import listObjectKeys from "../utils/listObjectKeys"
import {useState, useEffect} from "react"



const Repo = ({repo}) => {

  const [languages, setLanguages] = useState([])

  const created = dateFormatter(repo.created_at)
  const updated = dateFormatter(repo.updated_at)

  useEffect(() => {
    fetchOther(repo.languages_url)
      .then(data => listObjectKeys(data))
      .then(data => setLanguages(data))
  }, [])

  // console.log(languages)

  return (
    <RepoContent>
      <div className="name">
        <h3>{repo.name}</h3>
        <a href={repo.html_url} rel="noreferrer" target="_blank"><p>{repo.full_name}</p></a>
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
        {
          languages.map(lang => <p key={lang}>{lang}</p>)
        }
      </div>
      <div className="create-update">
        <p>Created at: {created}</p>
        <p>Updated at: {updated}</p>
      </div>
      <div className="owner">
        <p>By: {repo.owner.login}</p>
      </div>
      <a href={repo.owner.html_url} target="_blank" rel="noreferrer" className="picture">
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
    width: 15%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    /* gap: 5px; */
    flex-wrap: wrap;

    p {
      background-color: #ddd;
      color: #0d1117;
      padding: 2px;
      margin: 1px;
      border-radius: 3px;
    }
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
