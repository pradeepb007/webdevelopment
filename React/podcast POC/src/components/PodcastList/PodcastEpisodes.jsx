import { Container } from "@mui/system";
import React from "react";

// import slider1 from "../../assets/images/banner1.jpg";

export default function PodcastEpisodes() {
  return (
    <div className="section podcast-episodes">
        <Container>
      <h3 className="mb-3">Recent Podcasts</h3>

      <div className="podcast-entry">
        <div className="podcast-image">
        {/* <img src={slider1} alt="" /> */}
        </div>
        <div className="poadcast-text">
          <h3 className="font-weight-light">
            <a href="/PodcastDetails">
              Episode 03: Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05">
              <small>
                By Mike Smith <span className="sep">/</span> 16 September 2017{" "}
                <span className="sep">/</span> 1:30:20
              </small>
            </span>
          </div>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            repellat mollitia consequatur, optio nesciunt placeat. Iste
            voluptates excepturi tenetur, nesciunt.
          </p>

          <audio src="https://hn-audioblogs.s3-us-west-2.amazonaws.com/ckvlir7jm01fuuis16ug02c3m" controls/>
          
        </div>
      </div>
      <div className="podcast-entry">
        <div className="podcast-image">
        {/* <img src={slider1} alt="" /> */}
        </div>
        <div className="poadcast-text">
          <h3 className="font-weight-light">
            <a href="/PodcastDetails">
              Episode 02: Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05">
              <small>
                By Mike Smith <span className="sep">/</span> 16 September 2017{" "}
                <span className="sep">/</span> 1:30:20
              </small>
            </span>
          </div>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            repellat mollitia consequatur, optio nesciunt placeat. Iste
            voluptates excepturi tenetur, nesciunt.
          </p>

          <audio src="https://hn-audioblogs.s3-us-west-2.amazonaws.com/ckvlir7jm01fuuis16ug02c3m" controls/>
          
        </div>
      </div>
      <div className="podcast-entry">
        <div className="podcast-image">
        {/* <img src={slider1} alt="" /> */}
        </div>
        <div className="poadcast-text">
          <h3 className="font-weight-light">
            <a href="/PodcastDetails">
              Episode 01: Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05">
              <small>
                By Mike Smith <span className="sep">/</span> 16 September 2017{" "}
                <span className="sep">/</span> 1:30:20
              </small>
            </span>
          </div>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            repellat mollitia consequatur, optio nesciunt placeat. Iste
            voluptates excepturi tenetur, nesciunt.
          </p>

          <audio src="https://hn-audioblogs.s3-us-west-2.amazonaws.com/ckvlir7jm01fuuis16ug02c3m" controls/>
          
        </div>
      </div>
      </Container>
    </div>
  );
}
