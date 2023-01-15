import React from 'react'
import "../css/dealsBanner.css"
import phone from "../assets/images/phone.png"
import { Link } from 'react-router-dom'

const DealsBaner = () => {
  return (
    <div className='dealsBannerMain'>
        <div className="phoneImage">
            <img src={phone} alt="" />
        </div>
        <div className="phoneDescription">
            <p>xxx y zzz abcabc abcabc acac bb acbbacfgb</p>
        </div>
        <div className="shopBtn">
            <Link><p>Buy now</p></Link>
        </div>
    </div>
  )
}

export default DealsBaner