// import { View, Text } from 'react-native'
// import React from 'react'
import { useNavigate } from 'react-router-dom';
import HeroSection from '../Components/hero.jsx'
import NavSection from '../components/navbar.jsx'
// import Carousel from '../Components/gallery.jsx';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])

  return (
    <>
      <NavSection />   
      <HeroSection ></HeroSection> 
      {/* <Carousel></Carousel>     */}
    </>
  )
}

export default HomePage