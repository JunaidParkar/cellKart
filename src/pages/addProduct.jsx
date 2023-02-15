import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAdminLogin } from '../firebase/admin/loginAdmin'
import "../css/admin/addProducts.css"

const AddProduct = () => {

    const [productData, setProductData] = useState({
        name: "",
        date: "",
        marketPrice: "",
        sellingPrice: "",
        brand: "",
        info: "",
        productID: ""
    })

    useEffect(() => {
        const checkLoginStatus = async () => {
          await checkAdminLogin().then(data => {
              if (!data) {
                  navigate("/")
              }
          })
        }
        checkLoginStatus()
      }, [])
  
      const navigate = useNavigate()

      const handelTypedData = (e) => {
        setProductData({...productData, [e.target.name]: e.target.value})
      }


  return (
    <>
        <div className="mainContainerAdmin">
            <form action="" className='addProductsForm' method="post">
                <h3>add a product</h3>
                <div className="productInputWrapper">
                    <label htmlFor="productName">Device name</label>
                    <input type="text" name="productName" id="productName" placeholder='Enter product name' onChange={e => handelTypedData(e)} required />
                </div>
                <div className="productInputWrapper inline">
                    <div className="innerProductInputWrapper">
                        <label htmlFor="date">Choose bind date</label>
                        <input type="date" name="date" id="date" onChange={e => handelTypedData(e)} required />
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="marketPrice">Market price</label>
                        <input type="number" name="marketPrice" placeholder='Enter market price in numbers' id="marketPrice" onChange={e => handelTypedData(e)} required />
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="sellingPrice">Selling price</label>
                        <input type="number" name="sellingPrice" placeholder='Enter selling price in numbers' id="sellingPrice" onChange={e => handelTypedData(e)} required />
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="brand">Brand</label>
                        <input type="number" name="brand" placeholder='Enter brand name' id="brand" onChange={e => handelTypedData(e)} required />
                    </div> 
                </div>
                <div className="productInputWrapper inline">
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image1">Upload image 1</label>
                        <input type="file" hidden name="image1" id="image1" required />
                        <input type="range" disabled value="0" min="0" max="100" name="" id="" />
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image2">Upload image 2</label>
                        <input type="file" hidden name="image2" id="image2" required />
                        <input type="range" disabled value="0" min="0" max="100" name="" id="" />
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image3">Upload image 3</label>
                        <input type="file" hidden name="image3" id="image3" required />
                        <input type="range" disabled value="0" min="0" max="100" name="" id="" />
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image4">Upload image 4</label>
                        <input type="file" hidden name="image4" id="image4" required />
                        <input type="range" disabled value="0" min="0" max="100" name="" id="" />
                    </div> 
                </div> 
                <div className="productInputWrapper">
                    <label htmlFor="moreInfo">Some info about product</label>
                    <textarea type="text" name="moreInfo" placeholder='Enter some details in short' id="moreInfo" onChange={e => handelTypedData(e)} required rows="3" />
                </div>
                <div className="productSubmitWrapper">
                    <input type="submit" value="Add product" />
                </div>
            </form>
        </div>
    </>
  )
}

export default AddProduct