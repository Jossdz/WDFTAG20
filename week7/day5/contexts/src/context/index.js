import React, { useState, createContext } from "react"

export const MyContext = createContext()

export default function CtxProvider({ children }) {
  const [name, setName] = useState("Joss")
  return (
    <MyContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </MyContext.Provider>
  )
}
