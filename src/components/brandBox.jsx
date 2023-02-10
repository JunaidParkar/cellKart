import React from 'react'
import '../css/brandBox.css'
import apple from '../assets/brand/apple.png'

const BrandBox = () => {
  return (
    <>
      <div className="brands-box">
          <span><img src={apple} alt="" /></span>
          <span><img src={apple} alt="" /></span>
          <span><img src={apple} alt="" /></span>
          <span><img src={apple} alt="" /></span>
          <span><img src={apple} alt="" /></span>
          <span><img src={apple} alt="" /></span>
      </div>
    </>
  )
}

export default BrandBox