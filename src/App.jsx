// import { useState } from 'react'
import './App.css'

// import Sbar from './components/sidebar.jsx';
// import Nbar from './components/navbar.jsx';
// import SellItem from './components/SellItem.jsx';
// import LendItem from './components/lendItem.jsx';
// import Profile from './components/profile.jsx';
// import ProfileUpdate from './components/profileupdate.jsx';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/homePage.jsx';
import SideBarPage from './pages/SideBarPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProfileUpdatePage from './pages/ProfileUpdatePage.jsx';
import SellItemPage from './pages/SellItemPage.jsx'; 
import LendItemPage from './pages/LendItempPage.jsx';
import History from './pages/History.jsx';
import SoldPage from './pages/SoldPage.jsx';
import LentPage from './pages/LentPage.jsx';
import PurchasedPage from './pages/PurchasedPage.jsx';
import BorrowedPage from './pages/BorrowedPage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<HomePage/>}></Route>
          <Route  path="/sidebar" element={<SideBarPage/>}></Route>
          <Route  path="/profile" element={<ProfilePage/>}></Route>
          <Route  path="/profileupdate" element={<ProfileUpdatePage/>}></Route>
          <Route  path="/sell" element={<SellItemPage/>}></Route>
          <Route  path="/lend" element={<LendItemPage/>}></Route>
          <Route  path="/history" element={<History/>}></Route>
          <Route  path="/sold" element={<SoldPage/>}></Route>
          <Route  path="/lent" element={<LentPage/>}></Route>
          <Route  path="/purchased" element={<PurchasedPage/>}></Route>
          <Route  path="/borrowed" element={<BorrowedPage/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ProfilePage/> */}
    </>
  )
}

export default App
