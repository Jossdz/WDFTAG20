import React, { useState } from "react"
import MovieCard from "./MovieCard"

const List = () => {
  const [movies, setMovies] = useState([
    {
      id: "fUbJPciPq",
      title: "The Godfather",
      director: "Francis Coppola",
      hasOscars: true,
      IMDbRating: 9.2
    },
    {
      id: "EXN9npPlo",
      title: "Star Wars",
      director: "Rian Johnson",
      hasOscars: true,
      IMDbRating: 8.7
    },
    {
      id: "lecqGHnAb",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      hasOscars: false,
      IMDbRating: 9.3
    }
  ])

  function addMovie() {
    const newMovie = {
      id: "wefwqieo74i",
      title: "The Truman show",
      director: "Peter Weir"
    }
    setMovies([...movies, newMovie])
  }

  return (
    <section>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
      <button onClick={addMovie}>Add movie</button>
    </section>
  )
}

export default List
