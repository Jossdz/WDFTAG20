import React, { useState } from "react"

function Notification({ notification, time }) {
  const [message, setMessage] = useState("loading...")

  setTimeout(() => {
    setMessage(notification)
  }, time)

  return <div>{message}</div>
}

export default Notification
