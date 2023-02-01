import React, { useState, useEffect, useRef } from "react";
import Controls from "../AzurePlayer/Controls";
import Grid from "@mui/material/Grid";
import MiniControls from "../AzurePlayer/MiniControls";
import Details from "../AzurePlayer/Details";
import songs from "../AzurePlayer/Data";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FixFooter() {
  const [slideUp, setSlideUp] = useState(false);

  let amp = window["amp"];

  const [isPlaying, setIsPlaying] = useState(false);
  const [songId, setSongId] = useState(0);
  const [speed, setSpeed] = useState(1);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);

  const videoElement = useRef();
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  // const myPlayer = amp(videoElement.current);
  // console.log(myPlayer);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      let temp = songId;
      temp++;
      if (temp > songs.length - 1) {
        temp = 0;
      }
      setSongId(temp);
      setIsPlaying(false);

      return temp;
    } else {
      let temp = songId;
      if (temp == 0) return;
      temp--;
      setSongId(temp);
      setIsPlaying(false);
      return temp;
    }
  };

  const backThirty = () => {
    const myPlayer = amp(videoElement.current);
    var curTime = 0;
    curTime = myPlayer.currentTime() - 5;
    myPlayer.currentTime(curTime);
  };

  const forwardThirty = () => {
    const myPlayer = amp(videoElement.current);
    var curTime = 0;
    curTime = myPlayer.currentTime() + 5;
    myPlayer.currentTime(curTime);
  };

  // useEffect(() => {
  // const audiospeed = audioPlayer.current;
  // audiospeed.playbackRate = speed;},
  // [speed]);

  useEffect(() => {
    const myPlayer = amp(videoElement.current);
    myPlayer.playbackRate(speed);
  }, [speed]);

  const changeSpeed = () => {
    if (speed >= 2) {
      setSpeed(0.5);
    } else {
      setSpeed(speed + 0.5);
      console.log(speed);
      // myPlayer.playbackRate(speed);
    }
    // setTimeout(() => {
    //   console.log(speed);
    //   myPlayer.playbackRate(speed);
    // }, 500);
  };

  // useEffect(() => {
  // if (videoElement.current){
  // const myPlayer = amp(videoElement.current);
  // const seconds = Math.floor(myPlayer.duration());
  // console.log(seconds);
  // setDuration(seconds);
  // progressBar.current.max = seconds;
  // }
  // }, [
  // videoElement?.current?.loadedmetadata,
  // videoElement?.current?.readyState,
  // ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const ChangePlayPause = () => {
    const myPlayer = amp(videoElement.current);
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      myPlayer.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      myPlayer.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    const myPlayer = amp(videoElement.current);
    progressBar.current.value = myPlayer.currentTime();
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    const myPlayer = amp(videoElement.current);
    var playcurTime = myPlayer.currentTime();
    playcurTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  // const changeVolume = () => {
  // const myPlayer = amp(videoElement.current);
  // var playerVolume = myPlayer.volume();
  // playerVolume = volume / 100;
  // console.log(playerVolume);
  // setVolume(playerVolume);

  // myPlayer.volume(setVolume);

  // };

  const chnageMute = () => {
    const myPlayer = amp(videoElement.current);
    const prevValue = mute;
    setMute(!prevValue);
    if (!prevValue) {
      myPlayer.muted(true);
    } else {
      myPlayer.muted(false);
    }
  };

  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon sx={{ color: "black" }} onClick={chnageMute} />
    ) : volume <= 20 ? (
      <VolumeMuteIcon sx={{ color: "black" }} onClick={chnageMute} />
    ) : volume <= 75 ? (
      <VolumeDownIcon sx={{ color: "black" }} onClick={chnageMute} />
    ) : (
      <VolumeUpIcon sx={{ color: "black" }} onClick={chnageMute} />
    );
  }

  const myOptions = {
    nativeControlsForTouch: true,
    controls: true,
    autoplay: false,
    width: "640",
    height: "400",
    logo: { enabled: false },
    playbackSpeed: {
      enabled: true,
      initialSpeed: 1.0,
      speedLevels: [
        { name: "x4.0", value: 4.0 },
        { name: "x3.0", value: 3.0 },
        { name: "x2.0", value: 2.0 },
        { name: "x1.75", value: 1.75 },
        { name: "x1.5", value: 1.5 },
        { name: "x1.25", value: 1.25 },
        { name: "normal", value: 1.0 },
        { name: "x0.75", value: 0.75 },
        { name: "x0.5", value: 0.5 },
      ],
    },
  };

  useEffect(() => {
    if (videoElement.current) {
      const myPlayer = amp(videoElement.current, myOptions);
      myPlayer.src([
        {
          src: songs[songId].src,
          type: "application/vnd.ms-sstr+xml",
          ProtectionInfo: [
            {
              type: "AES",
              // authenticationToken: mediaToken?.Cotent,
            },
          ],
        },
      ]);
      setTimeout(() => {
        const seconds = Math.floor(myPlayer.duration());
        // console.log(seconds);
        setDuration(seconds);
        progressBar.current.max = seconds;
      }, 500);

      // const seconds = Math.floor(myPlayer.duration());
      // console.log(seconds);
      // setDuration(seconds);
      // progressBar.current.max = seconds;
      // chnageMute();
      // changeSpeed();
    }
  }, [
    videoElement,
    videoElement?.current?.loadedmetadata,
    videoElement?.current?.readyState,
    songId,
  ]);

  return (
    <div className={`fix-footer ${slideUp ? "active" : ""}`}>
      {slideUp && (
        <>
          <div
            onClick={(event) => {
              event.stopPropagation();
              setSlideUp(false);
            }}
          >
            Close{" "}
          </div>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} md={6}>
              <div className="c-player">
                <div className="video-main-container">
                  <video
                    ref={videoElement}
                    className="azuremediaplayer amp-default-skin amp-big-play-centered"
                    tabIndex="0"
                    muted={mute}
                  ></video>
                </div>
                <div className="video-content">
                  <Details song={songs[songId]} />

                  <div className="progress-bar">
                    {/* Current Time*/}
                    <div> {calculateTime(currentTime)} </div>
                    {/* Progress Bar */}
                    <div className="progressDiv">
                      <input
                        type="range"
                        className="progressBar"
                        defaultValue="0"
                        ref={progressBar}
                        onChange={changeRange}
                      />
                    </div>
                    {/* Total Duration*/}
                    <div>
                      {duration && !isNaN(duration) && calculateTime(duration)}
                    </div>
                    <div>&nbsp;&nbsp;</div>
                    <button onClick={() => changeSpeed()}>{speed}x</button>
                    <div className="volumeControl">
                      <VolumeBtns /> &nbsp;
                      {/* <Slider aria-label="Volume" min={0} max={100} value={volume}
 onChange={changeVolume} /> */}
                    </div>
                  </div>

                  <Controls
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    SkipSong={SkipSong}
                    ChangePlayPause={ChangePlayPause}
                    backThirty={backThirty}
                    forwardThirty={forwardThirty}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </>
      )}

      {!slideUp && (
        <>
          <button
            className="slidedivClick"
            onClick={() => {
              setSlideUp(true);
            }}
          >
            {" "}
            slide up
          </button>
          <br />

          <div className="mini-player flex justify-sb align-center mtb-10">
            <div className="flex align-center">
              <div className="displayNone">
                <div className="video-main-container">
                  <video
                    ref={videoElement}
                    className="azuremediaplayer amp-default-skin amp-big-play-centered"
                    tabIndex="0"
                  ></video>
                </div>
              </div>

              <div className="mini-player-info mlr-10">
                <Details song={songs[songId]} />
                <div onClick={ChangePlayPause} className="mini-play-btn">
                  {isPlaying ? (
                    <PauseCircleIcon fontSize="large" />
                  ) : (
                    <PlayCircleIcon fontSize="large" />
                  )}
                </div>
              </div>
            </div>
            <div className="progressDiv">
              <input
                type="range"
                className="progressBar"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>
            {/* <Controls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              SkipSong={SkipSong}
              ChangePlayPause={ChangePlayPause}
              backThirty={backThirty}
              forwardThirty={forwardThirty}
            /> */}
          </div>
        </>
      )}
    </div>
  );
}
