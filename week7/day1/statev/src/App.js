import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Notification from "./Notification"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Notification notification='Hola a todos' time='3000' />
        <Notification notification='Ya despierten' time='1000' />
        <Notification notification='Es hora de react' time='5000' />
      </header>
    </div>
  )
}

export default App
