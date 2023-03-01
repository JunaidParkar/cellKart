import React from 'react'
import '../css/productCards.css'

const ProductCards = (props) => {

  return (
    <>
        <div className="product-card" style={{cursor: 'pointer'}} productid={props.keys} onClick={(e) => props.clickedID(e.target.getAttribute("productid"))}>
            <div className="img" productid={props.keys}>
                <img src={props.productsDatas.Images.Link1} productid={props.keys} alt="" />
            </div>
            <div className="detail" productid={props.keys}>
                <div className="brand" productid={props.keys}>
                    <div className="dot" productid={props.keys}></div>{props.productsDatas.name}
                </div>
                <div className="name" productid={props.keys}>{props.productsDatas.MoreInfo}</div>
                <div className="price" productid={props.keys}>
                    <div className="selling" productid={props.keys}>Rs: {props.productsDatas.SellingPrice}</div>
                    <div className="cutting" productid={props.keys}>Rs: {props.productsDatas.MarketPrice}</div>
                </div>
                {/* <div className="heart active" productid={props.keys}></div> */}
            </div>
        </div>
    </>
  )
}

export default ProductCards