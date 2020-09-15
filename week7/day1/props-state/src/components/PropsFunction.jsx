import React from 'react'



function PropsFunction ({name='Yvan', apellido, red, algo}){
  return(
    <div style={{backgroundColor: red}}>
      Hola {name} eres lo mejor de mi vida 
    </div>
  )
}

export default PropsFunction