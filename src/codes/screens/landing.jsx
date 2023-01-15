import React from 'react'
import DealsBaner from '../components/dealsBaner'
import Navbar from '../components/navbar'
import TopSearch from '../components/topSearch'
import "../css/home.css"

const Landing = () => {
  return (
    <>
      <Navbar />
      <DealsBaner />
      {/* <div className='padding'> */}
        <TopSearch />
      {/* </div> */}
    </>
  )
}

export default Landing