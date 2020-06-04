import React, { useState } from 'react';
import Drum from "./components/Drum"
import samples from "../lib/samples"

export const DrumContext = React.createContext()

const App = () => {
  const [keyPress, setKeyPress] = useState("")
  const handleKeydown = (e) => {
    setKeyPress(e.key.toUpperCase())
  }
  const handleKeyup = (e) => {
    setKeyPress()
  }
  document.addEventListener("keydown", handleKeydown)
  document.addEventListener("keyup", handleKeyup)
  return (
    <DrumContext.Provider value={{ keyPress }}>
      {samples.map(sample =>
        <Drum letter={sample.letter} label={sample.name} audio={sample.sample} />
      )}
    </DrumContext.Provider>
  )
}

export default App