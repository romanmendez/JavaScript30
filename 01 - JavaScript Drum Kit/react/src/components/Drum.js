import React, { useContext, useEffect, useState } from "react"
import { DrumContext } from "../App"
import styled from "@emotion/styled"

const KeyPad = styled.div`
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
  &.playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
`
const Label = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #ffc600;
`
const Key = styled.kbd`
  display: block;
  font-size: 4rem;
`

const Drum = ({ letter, label, audio }) => {
  const { keyPress } = useContext(DrumContext)
  const sound = new Audio(audio)
  const playing = keyPress === letter ? "playing" : ""

  useEffect(() => {
    sound.load()
  }, [])

  if (keyPress === letter) {
    sound.currentTime = 0
    sound.play()
  }

  return (
    <KeyPad data-key={`Key${letter}`} className={playing}>
      <Key>{letter}</Key>
      <Label>{label}</Label>
    </KeyPad>
  )
}

export default Drum