import React from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import Footer from '../components/Footer'
import PodcastDescription from '../components/PodcastDetails/PodcastDescription'

export default function PodcastDetails() {
  return (
    <div> 
        <PrimarySearchAppBar/>
        <PodcastDescription/>
   
    <Footer/>
    </div>
  )
}
