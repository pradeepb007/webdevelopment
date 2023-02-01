import React, { useState, useEffect, useRef } from "react";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";




export default function AzureMediaPlayer() {
  let amp = window["amp"];

  const [podcast, setPodcast] = useState();

  // const url = "https://dev1services.shotclasses.com/api/v3/ShotClasses/81399?locale=en-GB";

const getVideo = () =>{
  axios.get("https://dev1services.shotclasses.com/api/v3/ShotClasses/81399?locale=en-GB", {
    headers: {
      Accept: "application/json",
      AuthenticationToken:
        "clCXoGNegmvBrkfn87AD1BD84lLPrTH6xbsw5Cn3Oexjy+0/GGJyLMrtWriTJElEju+vTJeLoGe9Z80CoZsmXw==",         
      TenantSlugName: "UnileverDevPodcast",
      
    },
  })
  .then((response) => {
    const videoData = response.data;
    setPodcast(videoData);
  })
  .catch((error) => {
    console.log(error);
  });
}


  useEffect(() => {
    getVideo();
  }, []);

  const podcastItems = podcast.map((podcast, index) => {
    return (
      <Grid item md={3} xs={12} key={podcast.ID} className="trending-post">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={podcast.ImageUrl}
              alt={podcast.ImageUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {podcast.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {podcast.Description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  // const videoElement = useRef();
  // const myOptions = {
  //   nativeControlsForTouch: false,
  //   controls: true,
  //   autoplay: true,
  //   width: "640",
  //   height: "400",
  // };
  // useEffect(() => {
  //   if (videoElement.current) {
  //     const myPlayer = amp(videoElement.current, myOptions);
  //     myPlayer.src([
  //       {
  //         src: "https://dev1mediaservice.streaming.mediaservices.windows.net/5acf9393-5883-4d7b-8d68-c9a8b495ecd1/5ffb03fe-450e-40d6-88d9-e46e8dc8.ism/manifest",
  //         type: "application/vnd.ms-sstr+xml",
  //       //   ProtectionInfo : [
  //       //     {
  //       //       type : "AES",
  //       //       authenticationToken: mediaToken?.Cotent,
  //       //   }
  //       // ]
  //       },
  //     ]);
  //    console.log("Video Element is: ", videoElement.current);
  //   }
    
  // }, [videoElement]);

  return (
    <div className="main-container">

      <podcastItems/>
      {/* <video
        ref={videoElement}   
        id="azuremediaplayer"     
        class="azuremediaplayer amp-default-skin amp-big-play-centered"
        tabindex="0"
      ></video> */}
    </div>
  );
}
