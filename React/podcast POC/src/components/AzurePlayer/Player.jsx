import React, { useState, useEffect, useRef, useCallback } from "react";
import Controls from "./Controls";
import Details from "./Details";
import songs from "./data";

// import "./timelineMarkers";

export default function AzureMediaPlayer() {
  let amp = window["amp"];
  const videoElement = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [songId, setSongId] = useState(0);

  const plugin = () => {
    amp.plugin("testplugin", function (options) {
      var myPlayer = this;
      myPlayer.addEventListener(amp.eventName.ready, function () {
        console.log("player is ready!");
      });
    });
  };

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
      hotkeys: {
        volumeStep: 0.1,
        seekStep: 5,
        enableMute: true,
        enableFullscreen: true,
        enableNumbers: true,
        enableJogStyle: false,
      },
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

  const videoPlayer = useCallback(
    (item) => {
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
        // console.log(item);
        if (item) {
          myPlayer.play();
        } else {
          myPlayer.pause();
        }
        // playPause(myPlayer);
      }
    },
    [videoElement, songId]
  );

  useEffect(() => {
    videoPlayer(false);
  }, [videoPlayer]);

  useEffect(() => {
    if (isPlaying) {
      videoPlayer(true);
    } else {
      videoPlayer(false);
    }
  }, [isPlaying]);

  return (
    <div className="main-container">
      {/* <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio> */}

      {/* <audio
        ref={videoElement}
        id="azuremediaplayer"
        src={props.songs[props.currentSongIndex].src}
        class="azuremediaplayer amp-default-skin amp-big-play-centered"
        tabindex="0"
        data-setup={myOptions}
      >
        {" "}
      </audio> */}

      {/* <video
        ref={videoElement}
        id="vid1"
        controls
        className="azuremediaplayer amp-default-skin"
        data-setup={myOptions}
      >
        <source src={songs[songId].src} type="application/vnd.ms-sstr+xml" />
      </video>; */}

      <video
        ref={videoElement}
        className="azuremediaplayer amp-default-skin amp-big-play-centered"
        tabIndex="0"
      ></video>

      <Details song={songs[songId]} />

      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
    </div>
  );
}