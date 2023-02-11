import React from 'react'
import '../css/navbar.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'

const Navbar = () => {
  return (
    <>
        <div className="nav">
            <li className="logo">
                <img src={logo} alt="" />
            </li>
            <li className="btns" id="mnav">
                <span className="active">home</span>
                <span>products</span>
                <span>about</span>
                <span>contact</span>
                <span className="mnavclose">close</span>
            </li>
            <li className="btns-r">
                <span className="search-btn" ><img src={search} alt="" /></span>
                <span className="sell-btn">sell</span>
                <span className="search-btn menu" ><img src="https://img.icons8.com/ios/256/menu-rounded.pnghttps://img.icons8.com/ios/256/menu-rounded.png" alt="" /></span>
            </li>
        </div>
    </>
  )
}

export default Navbar