import React from 'react'
import "../css/getDealsByType.css"
import Cards from './cards'
import TypeCards from './typeCards'

const GreatDealsByType = () => {
  return (
    <>
        <div className="topSearchMain">
            <h3>Get best deals on</h3>
            <div className="cardSection">
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
                <TypeCards />
            </div>
            <div className="cardsSection">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    </>
  )
}

export default GreatDealsByType