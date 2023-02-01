import React from "react";

function Controls(props) {
  return (
    <div className="c-player--controls">
      <button
        className="skip-btn"
        onClick={(event) => {
          event.stopPropagation();
          props.SkipSong(false);
        }}
      >
        Previous
      </button>

      <button
        className="skip-btn"
        onClick={() => {
          props.backThirty();
        }}
      >
        backward 30
      </button>

      <button
        className="play-btn"
        onClick={() => {
          props.ChangePlayPause(!props.isPlaying);
        }}
      >
        {props.isPlaying ? <p>pause</p> : <p>play</p>}
      </button>

      <button
        className="skip-btn"
        onClick={() => {
          props.forwardThirty();
        }}
      >
        forward 30
      </button>

      {/* <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? <p>pause</p> : <p>play</p>}
      </button> */}

      <button
        className="skip-btn"
        onClick={(event) => {
          event.stopPropagation();
          props.SkipSong();
        }}
      >
        Next
      </button>

      {/* <button className="skip-btn" onClick={() => props.SkipSong()}>
        Next
      </button> */}
    </div>
  );
}

export default Controls;
