import React from 'react'
import '../css/banner.css'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <>
        <div className="banner">
            <div className="img">
                <img src={banner} alt="" />
            </div>
            <div className="text">
                <h1>A better way to upgrade your device</h1>
                <p>Get a premium phone at a fraction of the cost</p>
            </div>
        </div>
    </>
  )
}

export default Banner