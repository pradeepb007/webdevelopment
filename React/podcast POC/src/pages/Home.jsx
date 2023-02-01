import React from "react";
import PrimarySearchAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/Homepage/HeroBanner";
import Categories from "../components/Homepage/Categories";
import FixFooter from "../components/FixFooter/FixFooter";


export default function Home() {
  return (
    <>
      <div className="main-container">
        <PrimarySearchAppBar />
        <HeroImage />
        <Categories />       
      </div>          
      <Footer />  

      <FixFooter/>    
    </>
  );
}
