import React from "react";
import PrimarySearchAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/PodcastList/HeroBanner";
import PodcastEpisodes from "../components/PodcastList/PodcastEpisodes";


export default function PodcastList() {
  return (
    <>
      <div className="main-container">
        <PrimarySearchAppBar />
        <HeroBanner/>
        <PodcastEpisodes/>
       
      </div>

      <Footer />
    </>
  );
}
