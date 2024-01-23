// import { View, Text } from 'react-native'
// import React from 'react'
import NavSection from '../components/navbar.jsx'
import Sbar from "../components/sidebar.jsx"
import Profile from '../components/profile.jsx';

const ProfilePage = () => {
  return (
    <>
    <NavSection/>
    <div className="flex mb-4">
        <div className="w-1/4"><Sbar></Sbar></div>
        <div className="w-3/4"><Profile/></div>
      </div>
    </>
  )
}

export default ProfilePage