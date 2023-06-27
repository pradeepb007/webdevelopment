 import React from 'react'
 import {useLocation } from "react-router-dom";
import Header from './Header';
  
  function Navbar() {
    const location = useLocation();
    return (
    <>
       {location.pathname !== "/" && <Header/>}
    </>
    
    )
  }
  
  export default Navbar