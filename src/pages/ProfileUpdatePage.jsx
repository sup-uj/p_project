// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/nav.jsx'
import Sbar from "../components/sidebar.jsx"
// import Profile from '../components/profile.jsx';
import ProfileUpdate from '../components/profileupdate.jsx';

const ProfileUpdatePage = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mt-[73px]">
          <div className="-mt-[73px] w-1/4"><Sbar></Sbar></div>
          <div className="flex w-3/4">
          <div className='ml-[3.5rem]'><ProfileUpdate /></div>
        </div>
        </div>
    </>
  )
}

export default ProfileUpdatePage