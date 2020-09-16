import React, { useState, useEffect, useRef } from "react"

const Couter = () => {
  const [time, setTime] = useState(0)
  const timeRef = useRef()

  useEffect(() => {
    let interval
    console.log("El contador ha iniciado ")

    interval = setInterval(() => {
      setTime(prev => prev + 1)
      // La linea 14 no funciona ya que si la propiedad del estado no existe en la lista de dependencias (el segundo argumento del useEffect []) no la podemos leer
      // setTime(time + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  // Para lograr leer el valor del estado en un useEffect que no tiene dicho valor en sus dependencias agregamos un efecto que en cada cambio de time guarde ese valor en una referencia.
  // Estas referencias son un dato que persiste siempre que el componente se renderice y podemos acceder a ella en cualquier punto del componente.
  useEffect(() => {
    timeRef.current = time
  }, [time])

  useEffect(() => {
    return () => {
      console.log(`El timer se detuvo en el segundo ${timeRef.current}`)
    }
  }, [])

  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default Couter
