import React, { useState } from "react"
// import useInput from "./hooks/useInput"
import "./App.css"

function App() {
  const [title, settitle] = useState("")
  const [director, setdirector] = useState("")
  const [hasOscars, setHasOscars] = useState(false)
  const [IMDbRating, setIMDbRating] = useState(0)
  const [movies, setmovies] = useState([])

  // const titleInput = useInput('')

  function handleFormSubmit(e) {
    e.preventDefault()
    setmovies([...movies, { title, director, hasOscars, IMDbRating }])
    settitle("")
    setdirector("")
    setHasOscars(false)
    setIMDbRating(0)
  }

  function handleRemove(index) {
    // console.log("click")
    // const moviesCopy = movies
    // moviesCopy.splice(index, 1)
    // console.log(moviesCopy)
    // setmovies([...moviesCopy])
    setmovies(movies.filter((movie, i) => i !== index))
  }

  return (
    <div className='App'>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={e => settitle(e.target.value)}
        />

        <label>Director:</label>
        <input
          type='text'
          name='director'
          value={director}
          onChange={e => setdirector(e.target.value)}
        />

        <label>Oscar Awarded:</label>
        <input
          type='checkbox'
          name='hasOscars'
          checked={hasOscars}
          onChange={e => setHasOscars(e.target.checked)}
        />

        <label>IMDb Rating:</label>
        <input
          type='text'
          name='IMDbRating'
          value={IMDbRating}
          onChange={e => setIMDbRating(e.target.value)}
        />

        <button>Submit</button>
      </form>
      <h1>Movies: </h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <p>{movie.title}</p>
          <button onClick={() => handleRemove(index)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default App

// import React, { useState } from "react"

// import "./App.css"

// function App() {
//   // const [title, settitle] = useState("")
//   // const [director, setdirector] = useState("")
//   // const [hasOscars, setHasOscars] = useState(false)
//   // const [IMDbRating, setIMDbRating] = useState(0)
//   const [state, setstate] = useState({
//     title: "",
//     director: "",
//     hasOscars: false,
//     IMDbRating: 0
//   })

//   function handleFormSubmit(e) {
//     e.preventDefault()
//     console.log(state)
//   }

//   return (
//     <div className='App'>
//       <form onSubmit={handleFormSubmit}>
//         <label>Title:</label>
//         <input
//           type='text'
//           name='title'
//           value={state.title}
//           onChange={e => setstate({ ...state, title: e.target.value })}
//         />

//         <label>Director:</label>
//         <input
//           type='text'
//           name='director'
//           value={state.director}
//           onChange={e => setstate({ ...state, director: e.target.value })}
//         />

//         <label>Oscar Awarded:</label>
//         <input
//           type='checkbox'
//           name='hasOscars'
//           checked={state.hasOscars}
//           onChange={e => setstate({ ...state, hasOscars: e.target.checked })}
//         />

//         <label>IMDb Rating:</label>
//         <input
//           type='text'
//           name='IMDbRating'
//           value={state.IMDbRating}
//           onChange={e => setstate({ ...state, IMDbRating: e.target.value })}
//         />

//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
