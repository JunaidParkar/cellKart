import React from 'react'
import '../css/cards.css'
import phone from '../assets/product/p1.png'

const Cards = () => {
  return (
    <>
        <div className="product-card">
            <div className="img">
                <img src={phone} alt="" />
            </div>
            <div className="detail">
                <div className="brand">
                    <div className="dot"></div>vivo
                </div>
                <div className="name">vdjkfgjkdd fgldsf gldsfkg divo s1</div>
                <div className="price">
                    <div className="selling">$100</div>
                    <div className="cutting">$120</div>
                </div>
                <div className="heart active"></div>
            </div>
        </div>
    </>
  )
}

export default Cards