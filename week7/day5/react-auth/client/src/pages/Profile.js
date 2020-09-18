import React, { useContext } from "react"
import axios from "axios"
import { Context } from "../context"
// import { Redirect } from "react-router-dom"
import { Image } from "antd"
import { updateProfilePhoto, getCurrentUser } from "../services/auth"

const Profile = () => {
  const { user, loginUser } = useContext(Context)

  async function uploadPhoto(e) {
    console.log(e.target.files[0])
    // 1. Generar un objeto que le pondemos mandar a cloudinary
    const data = new FormData()
    data.append("file", e.target.files[0])
    data.append("upload_preset", "react-auth")
    // 2. vamos a mandar la foto a cloudinary(API)
    //     cloud Name  👇    👇 tipo de recurso
    const {
      data: { secure_url }
    } = await axios.post(
      "https://api.cloudinary.com/v1_1/joss/image/upload",
      data
    )
    // 3. esperamos a que cloudinary nos entregue la foto en su nube
    // 4. enviamos la foto a nuestro backend
    await updateProfilePhoto(secure_url)
    // 5. vamos a actualizar el usuario en sesion para ver la foto cambiada
    const { user } = await getCurrentUser()
    loginUser(user)
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h3>email: {user?.email}</h3>
      <Image src={user?.photo} width={250} />
      <br />
      <input type='file' name='photo' id='photo' onChange={uploadPhoto} />
    </div>
  )
  // ) : (
  //   <Redirect to='/login' />
  // )
}

export default Profile
