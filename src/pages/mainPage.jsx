import React, { useState, useEffect } from 'react'
import Banner from '../components/banner'
import BrandBox from '../components/brandBox'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ProductCards from '../components/productCards'
import ProductDescription from '../components/productDescription'
import '../css/mainPage.css'
import getAllProducts from '../firebase/productContext'

const MainPage = () => {

    // const [descriptionClicked, setDescriptionClicked] = useState(false)
    const [productsData, setProductsData] = useState()
    const [productDescriptionId, setProductDescriptionId] = useState(null)
    const [productClickedData, setProductClickedData] = useState("")


    useEffect(() => {
      const mainFunction = async () => {
        getAllProducts().then(data => {
            setProductsData(data)
        })
      }
      mainFunction()
    }, [])

    
    const getProductIDFromClicked = (id) => {
        console.log(productsData[0][id])
        setProductClickedData(productsData[0][id])
    }

    

    console.log(productDescriptionId)
    
    // console.log(productDescriptionId)
    // console.log(productsData[0])

  return (
    <>
        <div className="home">
            <div className="container-l">
                <Navbar />
                <Banner />
                <div className="container-l">
                    <p className="sub-heading">Featured product</p>
                </div>

                <div className="container-l v1">
                    <div className="product-box">{
                            productsData !== null && productsData !== undefined ? 
                            Object.keys(productsData[0]).map((key, index) => {
                                // console.log(productsData[0][key])
                                return <ProductCards key={index} keys={key} clickedID={getProductIDFromClicked} productsDatas={productsData[0][key]} />
                            })
                            : ""
                        }
                    </div>
                </div>

                <div className="container-l">
                    <div className="page-heading">
                        <div className="text">brands</div>
                    </div>
                    <BrandBox />
                </div>

            </div>
        </div>
        <Footer />

        <ProductDescription productData={productClickedData} />
    </>
  )
}

export default MainPage