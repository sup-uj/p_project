// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/navbar.jsx'
import Sbar from "../components/sidebar.jsx"
import SellItem from '../components/SellItem.jsx';




const SellItemPage = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mb-4">
          <div className="w-1/4"><Sbar></Sbar></div>
          <div className="w-3/4"><SellItem/></div>
        </div>
    </>
  )
}

export default SellItemPage