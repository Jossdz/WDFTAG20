import React from "react"
import Card from "./components/Card"
import styled from "styled-components"

// const Button = styled.button`
//   border: none;
//   background-color: ${props =>
//     props.btntype === "primary" ? "blue" : "violet"};
//   padding: 10px;
//   border-radius: 12px;
//   color: white;
//   font-weight: 800;
// `

const Container = styled.section`
  display: flex;
`

function App() {
  return (
    <Container>
      <Card
        title='React hooks'
        body='El futuro es hoy oiste biejo'
        link='reactjs.org'
        subtitle='lo mas fancy'
      />
    </Container>
  )
}

export default App
