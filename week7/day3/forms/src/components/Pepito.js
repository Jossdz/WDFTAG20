import React, { useEffect, useState } from "react"

function Pepito() {
  const [age, setage] = useState(1)

  useEffect(() => {
    // Esto se ejecuta cuando el componente nace (cuando se pinta en la pantalla)
    // o cuando el componente se actualiza
    if (age === 1) {
      console.log("ke transa banda ya lleguee")
    } else {
      console.log("Hola bandita tengo un a~o mas que ayer")
    }
  }, [age])

  useEffect(() => {
    return () => {
      //esto pasa cuando el componente deja de existir en la vista.
      console.log("adios banda fue un gusto :'v")
    }
  }, [])

  return (
    <div>
      <h1>Hola soy pepito y tengo {age} a~os</h1>
      <button onClick={() => setage(age + 1)}>crecer</button>
    </div>
  )
}

export default Pepito
