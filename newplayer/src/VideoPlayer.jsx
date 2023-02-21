import React, { useEffect, useRef } from "react";

export default function VideoPlayer() {
  let amp = window["amp"];
  const videoElement = useRef();

  const myOptions = {
    controls: true,
    autoplay: true,
    logo: { enabled: false },
 
  };

  useEffect(() => {
    if (videoElement.current) {   
        const player = amp(videoElement.current, myOptions);
        player.src([
          {
            src: "//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest",
            type: "application/vnd.ms-sstr+xml",      
          },
        ]);
        
    // Request media session API for background playback
    if ('mediaSession' in navigator) {       
        navigator.mediaSession.setActionHandler('play', () => {
          player.play();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          player.pause();
        });
      }
  
// Display a notification with playback controls on desktop
if (!('mediaSession' in navigator)) {
    const notification = new Notification('Your media title', {
      body: 'Your media artist',
      icon: 'https://your-media-artwork-url',
      silent: true
    });

    const playAction = notification.addAction('play', 'Play');
    const pauseAction = notification.addAction('pause', 'Pause');

    playAction.addEventListener('click', () => {
      player.play();
      notification.close();
    });
    pauseAction.addEventListener('click', () => {
      player.pause();
      notification.close();
    });
  }

    }
  }, [videoElement]);

  return (
    <div>      
        <audio
        ref={videoElement}
        className="azuremediaplayer amp-flush-skin amp-big-play-centered"
        tabIndex="0"
        ></audio>           
           
    </div>
  );
}
