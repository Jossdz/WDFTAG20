import React from "react"

const ProfileM = props => {
  console.log(props.match)
  return (
    <div>
      <h1>Email: {props.match.params.email}</h1>
    </div>
  )
}

export default ProfileM
