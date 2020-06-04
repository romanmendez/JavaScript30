import React, { useContext, useEffect } from "react"
import { DrumContext } from "../App"
import samples from "../../lib/samples"

const Drum = ({ letter, label, audio }) => {
  const { keyPress } = useContext(DrumContext)
  const sound = new Audio(audio)

  useEffect(() => {
    sound.load()
    console.log(sound)
  }, [])

  if (keyPress === letter) {
    sound.currentTime = 0
    sound.play().then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <>
      <div data-key={`Key${letter}`} className="key">
        <kbd>{letter}</kbd>
        <span>{label}</span>
      </div>
    </>
  )
}

export default Drum