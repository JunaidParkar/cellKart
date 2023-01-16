import React from 'react'
import "../css/getDealsByType.css"
import Cards from './cards'
import TypeCards from './typeCards'

const GreatDealsByType = () => {

  // const item = document.getElementById("MAIN");

  // const boxScroll = (e) =>  {
  //   if (e.deltaY > 0){
  //     item.scrollLeft += 100
  //     window.scrollTo(0, window.body.scrollY)
  //     console.log(document.body.scrollTop)
  //   }else {
  //     item.scrollLeft += -100
  //   }
  // };
  // onWheel={boxScroll}


  return (
    <>
        <div className="topSearchMain">
            <h3>Get best deals on</h3>
            <div className="cardSection" id='MAIN'>
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
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
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