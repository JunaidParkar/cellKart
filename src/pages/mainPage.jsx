import React, { useState } from 'react'
import Banner from '../components/banner'
import BrandBox from '../components/brandBox'
import Cards from '../components/cards'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import doc from '../js/doc'
import ProductDescription from '../components/productDescription'
import productcard from '../js/common'
import '../css/mainPage.css'

const MainPage = () => {

    // const [descriptionClicked, setDescriptionClicked] = useState(false)
    const [productsData, setProductsData] = useState({
        apple: [
            {
                deviceUID: "hello",
                deviceName: "IPhone XR",
                devicePrice: "1k",
                deviceBrand: "apple",
                deviceOfferedPrice: "800",
                deviceImageLink: ["dnjedw", "njwndi", "nnu3"]
            },
            {
                deviceUID: "hola",
                deviceName: "IPhone XR",
                devicePrice: "1k",
                deviceBrand: "apple",
                deviceOfferedPrice: "800",
                deviceImageLink: ["dnjedw", "njwndi", "nnu3"]
            }
        ],
        vivo: [
            {
                deviceUID: "p",
                deviceName: "IPhone XR",
                devicePrice: "1k",
                deviceBrand: "apple",
                deviceOfferedPrice: "800",
                deviceImageLink: ["dnjedw", "njwndi", "nnu3"]
            },
            {
                deviceUID: "5",
                deviceName: "IPhone XR1",
                devicePrice: "1k",
                deviceBrand: "apple",
                deviceOfferedPrice: "800",
                deviceImageLink: ["dnjedw", "njwndi", "nnu3"]
            }
        ]
    })
    const [productDescriptionId, setProductDescriptionId] = useState(null)

    // let prod_card = doc.qall('.product-card');

    // prod_card.forEach(element => {
    //     element.getElementsByClassName('img')[0].addEventListener('click', () => {
    //         // productcard.open();
    //         alert("hii")
    //     });
    // });
console.log(productDescriptionId)


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
                    <div className="product-box">
                        {/* <Cards data="hh" uid={(uid) => setProductDescriptionId(uid)} />
                        <Cards data="yy" uid={(uid) => setProductDescriptionId(uid)} /> */}
                        {
                            Object.keys(productsData).map((key, index) => {
                                // console.log(productsData[key][1])
                                for (let i = 0; i < productsData[key].length + 1; i++) {
                                    // const element = array[i];
                                    return (
                                        <>
                                            {/* {console.log(key , index)} */}
                                            <Cards data={productsData[key][i]} uid={(uid) => setProductDescriptionId(uid)} />
                                        </>
                                    )   
                                }
                            })
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

        <ProductDescription />
    </>
  )
}

export default MainPage