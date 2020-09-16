import React from "react"
import { Redirect } from "react-router-dom"

const Profile = () => {
  const user = null
  return user ? (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <Redirect to='/login' />
  )
}

export default Profile
