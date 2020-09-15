import React, { useState } from "react"

const MovieCard = ({ title, director, id, hasOscars, IMDbRating }) => {
  const [showOscarAwarded, setShowOscarAwarded] = useState(hasOscars)
  return (
    <article>
      <h3>{title}</h3>
      <b>{director}</b>
      <br />
      <small>{id}</small>
      {4 > 2 && showOscarAwarded && hasOscars && <p>🏆</p>}
      {showOscarAwarded && !hasOscars && <p>💩</p>}
      <button onClick={() => setShowOscarAwarded(!showOscarAwarded)}>
        show Oscar Awarded
      </button>
    </article>
  )
}

export default MovieCard
