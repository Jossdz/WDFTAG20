import React, { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [characters, setCharacters] = useState(null)

  async function getData() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    )
    setCharacters(data.results)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Rick & Morty api</h1>
        {characters ? (
          characters.map(character => (
            <div key={character.id}>
              <h4>{character.name}</h4>
              <img src={character.image} alt={character.name} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  )
}

export default App
