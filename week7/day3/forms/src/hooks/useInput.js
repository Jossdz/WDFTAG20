// Custom hook

import { useState } from "react"

export default initialState => {
  const [value, setValue] = useState(initialState)

  const onChange = ({ target: { value: inputVal } }) => {
    setValue(inputVal)
  }

  return { value, onChange }
}
