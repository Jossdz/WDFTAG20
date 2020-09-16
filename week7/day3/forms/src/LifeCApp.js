import React, { useState } from "react"
// import Pepito from "./components/Pepito"
import Timer from "./components/Couter"

const LifeCApp = () => {
  const [showPepito, setShowPepito] = useState(false)
  return (
    <center>
      <button onClick={() => setShowPepito(!showPepito)}>toggle</button>
      {/* {showPepito && <Pepito />}} */}
      {showPepito && <Timer />}
    </center>
  )
}

export default LifeCApp
