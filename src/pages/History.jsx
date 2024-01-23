// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/navbar.jsx'
import Sbar from "../components/sidebar.jsx"

const History = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mb-6">
          <div className="w-1/6 "><Sbar></Sbar></div>
          
          <div className="w-5/6 bg-gray-400 h-12"><h1>History</h1></div>
           
        </div>
    </>
  )
}

export default History