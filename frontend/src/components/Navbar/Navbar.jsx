import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

    const [menu,setMenue] = useState("Home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenue("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenue("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenue("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile-App</li>
        <li onClick={()=>setMenue("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
