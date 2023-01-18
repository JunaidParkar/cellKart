import React from 'react'
import "../../css/admin/addProduct.css"

const AddProductScreen = () => {
  return (
    <div className='addProductFormContainer'>
        <div className="formTitle">
            <h3>please fill all the data asked below...</h3>
            <form action="">
                <div className="productName">
                    <input required type="text" name="" id="" placeholder='Enter name of your phone' />
                </div>
                <div className="container">
                    <div className="varient">
                        <input required type="text" placeholder='Enter varient of the device' />
                    </div>
                    <div className="price">
                        <input required type="number" name="" id="" placeholder='Enter price of the device' />
                    </div>
                    <div className="brand">
                        <select value="Select brand">
                            <option value="">Select brand</option>
                            <option value="">Xiaomi</option>
                            <option value="">Vivo</option>
                        </select>
                    </div>
                    <div className="image">
                        <input required type="file" name="" id="" accept='image/*' placeholder='Add image of device' />
                    </div>
                </div>
                <div className="description">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter description of device including age of the device...' ></textarea>
                </div>
                <div className="addDeviceBtnContainer">
                    <input type="submit" value="add this producct" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProductScreen