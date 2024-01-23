import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HeroSection from './Components/hero'
import NavSection from './Components/navbar'
function App() {
  const [count, setCount] = useState(0)
  const handleSearch = (query) => {
    // Implement your search logic here using the query
    console.log(`Searching for: ${query}`);
  };
  return (
    <>
      <NavSection></NavSection>

      <HeroSection></HeroSection>
      
    </>
  )
}

export default App
