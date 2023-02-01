import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";

export default function VideoPlayer() {
  let amp = window["amp"];
  const videoElement = useRef();

  const myOptions = {
    controls: true,
    autoplay: false,
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
      stepback: {
        seekStep: 5,
      },
    },
  };

  useEffect(() => {
    if (videoElement.current) {   
        const myPlayer = amp(videoElement.current, myOptions);
        myPlayer.src([
          {
            src: "https://dev1mediaservice.streaming.mediaservices.windows.net/da9ef846-dc2c-4e62-a74f-a7aecc57618c/691e3f89-97b9-4678-93b5-9bf1638b.ism/manifest",
            type: "application/vnd.ms-sstr+xml",
            protectionInfo: [
              {
                type: "AES",
                authenticationToken:
                  "Bearer urn%3amicrosoft%3aazure%3amediaservices%3acontentkeyidentifier=1c35bca4-9c6e-4698-8aaf-557ed706b9b1&Audience=urn%3ashotclassesrealm&ExpiresOn=1675139880&Issuer=https%3a%2f%2fshotclassmediatoken.accesscontrol.windows.net%2f&HMACSHA256=UOiyELJlR9JanLnxOCxurVs5oTu7NQiXBeijxZIpMxk%3d",                 
              },
            ],
          },
        ]);
    }
  }, [videoElement]);

  return (
    <div>
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
              <h3>Video Player</h3> <br/>
              <audio
                ref={videoElement}
                className="azuremediaplayer amp-flush-skin amp-big-play-centered"
                tabIndex="0"
              ></audio>             
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
