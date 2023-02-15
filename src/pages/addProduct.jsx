import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAdminLogin } from '../firebase/admin/loginAdmin'
import "../css/admin/addProducts.css"

const AddProduct = () => {

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


  return (
    <>
        <div className="mainContainerAdmin">
            <form action="" className='addProductsForm' method="post">
                <h3>add a product</h3>
                <div className="productInputWrapper">
                    <label htmlFor="productName">Device name</label>
                    <input type="text" name="productName" id="productName" required />
                </div>
                <div className="productInputWrapper">
                    <label htmlFor="bindDate">original bind date</label>
                    <input type="text" name="bindDate" id="bindDate" required />
                </div><div className="productInputWrapper">
                    <label htmlFor="moreInfo">some info about product</label>
                    <input type="text" name="moreInfo" id="moreInfo" required />
                </div>
                <div className="productSubmitWrapper">
                    <input type="submit" value="add product" />
                </div>
            </form>
        </div>
    </>
  )
}

export default AddProduct