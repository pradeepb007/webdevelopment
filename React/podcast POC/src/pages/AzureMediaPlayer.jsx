import React, { useState, useEffect, useRef, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Controls from "../components/AzurePlayer/Controls";
import Details from "../components/AzurePlayer/Details";
import songs from "../components/AzurePlayer/Data";

export default function AzureMediaPlayer() {
  let amp = window["amp"];
  const videoElement = useRef();

  console.log(videoElement.current);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songId, setSongId] = useState(0);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      let temp = songId;
      temp++;
      if (temp > songs.length - 1) {
        temp = 0;
      }
      setSongId(temp);
      return temp;
    } else {
      let temp = songId;
      if (temp == 0) return;
      temp--;
      setSongId(temp);
      return temp;
    }
  };

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

    plugins: {
      testplugin: {
        seekStep: 15,
      },
      contentTitle: { name: "Azure Media Services Overview" },
    },
    // plugins: {
    //   timelineMarker: {
    //     markertime: ["0:00", "1:30", "1:48"],
    //   },
    //   hotkeys: {
    //     //optional settings
    //     volumeStep: 0.1,
    //     seekStep: 5,
    //     enableMute: true,
    //     enableFullscreen: true,
    //     enableNumbers: true,
    //     enableJogStyle: false,
    //   },
    // },
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
      if (!isPlaying) {
        myPlayer.play();
      } else {
        myPlayer.pause();
      }
    }
  }, [videoElement, songId]);

  return (
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
            ></video>
          </div>

          <Details song={songs[songId]} />

          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
        </div>
      </Grid>
    </Grid>
  );
}
