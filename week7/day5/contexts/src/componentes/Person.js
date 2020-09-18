import React, { useContext } from "react"
import { MyContext } from "../context"

export default function () {
  const context = useContext(MyContext)
  console.log(context)
  return (
    <div>
      <h1>Person: {context.name}</h1>
      <button onClick={() => context.setName("Jose Carlos")}>
        Change to real Name
      </button>
    </div>
  )
}
