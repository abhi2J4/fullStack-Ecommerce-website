import React from 'react';
import "./Navbar.css"
import navlogo from '../../assets/logo.png'
import navbarBanner from "../../assets/banner_mens.png"

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={navlogo}  alt="" className='nav-logo'/>
    <img src={navbarBanner}  alt="" className='banner_mens.png'/>

   
    </div>
  );
}
  
export default Navbar;
