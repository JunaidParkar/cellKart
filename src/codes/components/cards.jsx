import React from 'react'
import "../css/cards.css"
import download from "../assets/images/download.jpg"

const Cards = () => {
  return (
    <div className='cardMain'>
        <div className="cardImg">
            <img src={download} alt="" />
        </div>
        <div className="details">
            <div className="deviceName">
                <h3>POCO X3 Pro, varient Blue. by Xiaomi made in India. 5 years warranty</h3>
            </div>
            <div className="deviceVarient">
                <p>6GB + 128GB</p>
            </div>
            <div className="DevicePrice">
                <p>RS 500/-</p>
            </div>
            <div className="devicePurchase">
                <p className="purchase">
                    Purchase now
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cards