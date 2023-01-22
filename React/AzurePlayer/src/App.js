import { useState, useEffect, useRef } from "react";
import AzureMediaPlayer from "./components/AzurePlayer";
import NewPlayer from "./components/NewPlayer";
import Player from "./components/Player";

function App() {
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(0);

  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > songs.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex]);

  return (
    <div className="App">
      {/* <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      /> */}
      <div>
        <AzureMediaPlayer
        // currentSongIndex={currentSongIndex}
        // setCurrentSongIndex={setCurrentSongIndex}
        // nextSongIndex={nextSongIndex}
        />
      </div>
    </div>
  );
}

export default App;
