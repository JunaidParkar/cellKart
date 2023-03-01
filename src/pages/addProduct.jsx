import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAdminLogin } from '../firebase/admin/loginAdmin'
import "../css/admin/addProducts.css"
import addProduct from '../firebase/admin/manageProducts'
import { storage } from '../firebase/config'
// import { ref } from 'firebase/database'
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage'
import { addProductToDB } from '../firebase/productContext'

const AddProduct = () => {

    const [productData, setProductData] = useState({
        name: "",
        date: "",
        marketPrice: "",
        sellingPrice: "",
        brand: "",
        info: "",
        productID: "",
        image1: "",
        image2: "",
        image3: "",
        image4: ""
    })
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [image4, setImage4] = useState(null)
    const [imageUploadProgress, setImageUploadProgress] = useState({
        image1: 0,
        image2: 0,
        image3: 0,
        image4: 0
    })

    useEffect(() => {
        const checkLoginStatus = async () => {
          await checkAdminLogin().then(data => {
              if (!data) {
                  navigate("/")
              } else{ 
                
              }
          })
        }
        checkLoginStatus()
    }, [])
  
    const navigate = useNavigate()

    if (productData.productID == "") {
      setProductData({...productData, ['productID']: Date.now().toString(36) + Math.random().toString(36).substr(2)})
    }

    const handelTypedData = (e) => {
      setProductData({...productData, [e.target.name]: e.target.value})
    }


    const imageUpload = (file, progress, data) => {
        const imageRef = ref(storage, `products/${productData.productID}/${file.name}`)
        const taskUpload = uploadBytesResumable(imageRef, file)
        taskUpload.on('state_changed', snapshot => {
            setImageUploadProgress({...imageUploadProgress, [progress]: (snapshot.bytesTransferred / snapshot.totalBytes) * 100})
            }, error => {
            alert(error.message)
        }, async () => {
            await getDownloadURL(taskUpload.snapshot.ref).then(url => {
                setProductData({...productData, [data]: url})
            })
        })
    }

    const submitProduct = async (e) => {
        e.preventDefault()
        if (productData.brand  !== "" && productData.date !== "" && productData.image1 !== "" && productData.image2 !== "" && productData.image3 !== "" && productData.image4 !== "" && productData.info !=="" && productData.marketPrice !== "" && productData.name !== "" && productData.productID !== "" && productData.sellingPrice !== "") {
            await addProductToDB(productData).then(e => {
                if (!e[1]) {
                    if (e[0]) {
                        alert("data inserted")
                        navigate("/codes/admin")
                    } else{
                        alert("data unable to insert")
                    }
                } else {
                    alert(e[1])
                }
            })
        } else {
            alert("Something is missing")
        }
    }



  return (
    <>
        <div className="mainContainerAdmin">
            <form onSubmit={(e) => submitProduct(e)} className='addProductsForm' method='post'>
                <h3>add a product</h3>
                <div className="productInputWrapper">
                    <label htmlFor="productName">Device name</label>
                    <input type="text" name="name" id="productName" placeholder='Enter product name' onChange={e => handelTypedData(e)} required />
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
                        <input type="text" name="brand" placeholder='Enter brand name' id="brand" onChange={e => handelTypedData(e)} required />
                    </div> 
                </div>
                <div className="productInputWrapper inline">
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image1">{ image1 == null ? "Upload image 1" : image1.name }</label>
                        <input type="file" hidden disabled={image1 == null ? false : true} name="image1" id="image1" onChange={e => setImage1(e.target.files[0])} required />
                        <input type="range" disabled value={imageUploadProgress.image1} min="0" max="100" name="" id="" />
                        <div className="productSubmitWrapper">
                            <input type="button" value="upload" onClick={() => {imageUpload(image1, "image1", "image1"); document.getElementById("image1").setAttribute("disabled", true);}} disabled={image1 == null ? true : productData.image1 =="" ? false : true} />
                        </div>
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image2">{ image2 == null ? "Upload image 2" : image2.name }</label>
                        <input type="file" hidden disabled={image1 !== null && image2} name="image2" id="image2" onChange={e => setImage2(e.target.files[0])} required />
                        <input type="range" disabled value={imageUploadProgress.image2} min="0" max="100" name="" id="" />
                        <div className="productSubmitWrapper">
                            <input type="button" value="upload" onClick={() => {imageUpload(image2, "image2", "image2"), document.getElementById("image2").setAttribute("disabled", true);}} disabled={image2 == null ? true : productData.image2 == "" ? productData.image1 == "" ? true : false : true} />
                        </div>
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image3">{ image3 == null ? "Upload image 3" : image3.name }</label>
                        <input type="file" hidden name="image3" id="image3" onChange={e => setImage3(e.target.files[0])} required />
                        <input type="range" disabled value={imageUploadProgress.image3} min="0" max="100" name="" id="" />
                        <div className="productSubmitWrapper">
                            <input type="button" value="upload" onClick={() => {imageUpload(image3, "image3", "image3"), document.getElementById("image3").setAttribute("disabled", true);}} disabled={image3 == null ? true : productData.image3 == "" ? productData.image2 == "" ? true : false : true} />
                        </div>
                    </div> 
                    <div className="innerProductInputWrapper">
                        <label htmlFor="image4">{ image4 == null ? "Upload image 4" : image4.name }</label>
                        <input type="file" hidden name="image4" id="image4" onChange={e => setImage4(e.target.files[0])} required />
                        <input type="range" disabled value={imageUploadProgress.image4} min="0" max="100" name="" id="" />
                        <div className="productSubmitWrapper">
                            <input type="button" value="upload" onClick={() => {imageUpload(image4, "image4", "image4"); document.getElementById("image4").setAttribute("disabled", true);}} disabled={image4 == null ? true: productData.image4 == "" ? productData.image3 == "" ? true : false: true} />
                        </div>
                    </div> 
                </div> 
                <div className="productInputWrapper">
                    <label htmlFor="moreInfo">Some info about product</label>
                    <textarea type="text" name="info" placeholder='Enter some details in short' id="moreInfo" onChange={e => handelTypedData(e)} required rows="3" />
                </div>
                <div className="productSubmitWrapper">
                    <input type="submit" value="Add product" disabled={productData.image1 == "" || productData.image2 == "" || productData.image3 == "" || productData.image4 == ""} />
                </div>
            </form>
        </div>
    </>
  )
}

export default AddProduct