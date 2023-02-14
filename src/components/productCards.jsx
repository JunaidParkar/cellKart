import React, { useState } from 'react'
import '../css/productCards.css'
import phone from '../assets/product/p1.png'

const ProductCards = (props) => {
    console.log(props.productsDatas)
    console.log(props.keys)
    let a = `${props.productsDatas}.name`   
    console.log(a)

  return (
    <>
        <div className="product-card" productid={props.keys} onClick={() => {props.uid("hello")}}>
            <div className="img">
                <img src={""} alt="" />
            </div>
            <div className="detail">
                <div className="brand">
                    <div className="dot"></div>{props.productsDatas.name}
                </div>
                <div className="name">{props.productsDatas.MoreInfo}</div>
                <div className="price">
                    <div className="selling">Rs: {props.productsDatas.SellingPrice}</div>
                    <div className="cutting">Rs: {props.productsDatas.MarketPrice}</div>
                </div>
                <div className="heart active"></div>
            </div>
        </div>
    </>
  )
}

export default ProductCards