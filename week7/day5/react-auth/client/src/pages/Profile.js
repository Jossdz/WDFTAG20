import React, { useContext } from "react"
import { Context } from "../context"
import { Redirect } from "react-router-dom"

const Profile = () => {
  const { user } = useContext(Context)
  return (
    <div>
      <h1>Welcome</h1>
      <h3>email: {user?.email}</h3>
    </div>
  )
  // ) : (
  //   <Redirect to='/login' />
  // )
}

export default Profile
