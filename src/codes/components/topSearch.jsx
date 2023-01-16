import React from 'react'
import "../css/topSearch.css"
import Cards from './cards'

const TopSearch = () => {
  return (
    <>
        <div className="topSearchMain">
            <h3>top search</h3>
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

export default TopSearch