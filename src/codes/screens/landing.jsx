import React from 'react'
import DealsBaner from '../components/dealsBaner'
import Footer from '../components/footer'
import GreatDealsByType from '../components/greatDealsByType'
import Navbar from '../components/navbar'
import TopSearch from '../components/topSearch'
import "../css/home.css"

const Landing = () => {
  return (
    <>
      <Navbar />
      <DealsBaner />
      <TopSearch />
      <GreatDealsByType />
      <Footer />
    </>
  )
}

export default Landing