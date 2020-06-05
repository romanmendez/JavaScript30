import React, { useState } from "react";
import samples from "../lib/samples";
import DrumContext from "../lib/context";
import Drum from "./components/Drum";

const App = () => {
  const [keyPress, setKeyPress] = useState("");
  const handleKeydown = (e) => {
    setKeyPress(e.key.toUpperCase());
  };
  const handleKeyup = () => {
    setKeyPress();
  };
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("keyup", handleKeyup);
  return (
    <DrumContext.Provider value={{ keyPress }}>
      {samples.map((sample) => {
        return (
          <Drum
            key={sample.sample}
            letter={sample.letter}
            label={sample.name}
            audio={sample.sample}
          />
        );
      })}
    </DrumContext.Provider>
  );
};

export default App;
