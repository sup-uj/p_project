// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/navbar.jsx'
import Sbar from "../components/sidebar.jsx"
import SellItem from '../components/SellItem.jsx';




const SellItemPage = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mt-[73px]">
          <div className="-mt-[73px] w-1/4"><Sbar></Sbar></div>
          <div className="flex w-3/4">
          <div className='ml-[3.5rem]'><SellItem/></div>
        </div>
        </div>
    </>
  )
}

export default SellItemPage