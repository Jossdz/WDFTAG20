import React, { useContext } from "react"
import "./App.css"
import Family from "./componentes/Family"
import { MyContext } from "./context"

function App() {
  const ctx = useContext(MyContext)

  console.log("App", ctx)
  return (
    <div className='App'>
      <Family />
    </div>
  )
}

export default App
