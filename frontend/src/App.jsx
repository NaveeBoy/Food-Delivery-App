import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'



const App = () => {

const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    { showLogin?<LoginPopup/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/explore' element={<ExploreMenu/>}/>
      <Route path='/footer' element={<Footer/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

