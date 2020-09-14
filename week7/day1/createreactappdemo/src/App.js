import React from "react"
import "./App.css"
import StudentCard from "./components/StudentCard"
import ReactPlayer from "react-player"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <StudentCard name='Jero' project='Gigstock' />
        <StudentCard name='Mai' project='Kleen' />
        <StudentCard name='Diego' project='TABY' />
        <ReactPlayer url='https://vimeo.com/channels/top/22439234' playing />
        <ReactPlayer
          url='https://www.youtube.com/watch?v=kJQP7kiw5Fk'
          playing
          controls
          volume='0.5'
        />
      </header>
    </div>
  )
}

export default App
