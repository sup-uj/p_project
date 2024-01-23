// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/navbar.jsx'
import Sbar from "../components/sidebar.jsx"
// import Profile from '../components/profile.jsx';
import ProfileUpdate from '../components/profileupdate.jsx';

const ProfileUpdatePage = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mb-4">
          <div className="w-1/4"><Sbar></Sbar></div>
          <div className="w-3/4"><ProfileUpdate/></div>
        </div>
    </>
  )
}

export default ProfileUpdatePage