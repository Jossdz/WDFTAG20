import React from "react"
import styled from "styled-components"

const CardStyles = styled.div`
  width: 100vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: white;
  padding: 20px 0;
  margin-top: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h3:first-child {
    color: blueviolet;
  }
  & > h3:nth-child(2) {
    color: gray;
    font-size: 16px;
    margin: 0;
  }
  button {
    width: 120px;
    padding: 5px;
    border: none;
    background-color: blueviolet;
    color: white;
    border-radius: 5px;
    a {
      color: white;
      text-decoration: none;
    }
  }
  @media (min-width: 800px) {
    width: 40vw;
  }
`

const Card = ({ title, subtitle, body, link }) => {
  return (
    <CardStyles>
      <h3>{title}</h3>
      <h3>{subtitle}</h3>
      <p className='text'>{body}</p>
      <button>
        <a href={`/${link}`}>Link</a>
      </button>
    </CardStyles>
  )
}

export default Card
