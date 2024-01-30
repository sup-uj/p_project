// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/navbar.jsx'
import Sbar from "../components/sidebar.jsx"
import LendItem from '../components/lendItem.jsx';

const LendItemPage = () => {
  return (
    <>
      <NavSection />
      <div className="flex mt-[73px]">
        <div className="-mt-[73px] w-1/4"><Sbar></Sbar></div>
        <div className="flex w-3/4">
          <div className='ml-[3.5rem]'><LendItem /></div>
        </div>
      </div>
    </>
  )
}

export default LendItemPage