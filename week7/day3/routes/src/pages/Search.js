import React from "react"
import queryString from "query-string"

const Search = props => {
  console.log(props.location.search)
  const values = queryString.parse(props.location.search)
  console.log(values)
  return (
    <div>
      <h1>Search: {values.city}</h1>
    </div>
  )
}

export default Search
