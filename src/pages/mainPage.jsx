import React from 'react'
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

    let prod_card = doc.qall('.product-card');

    prod_card.forEach(element => {
        element.getElementsByClassName('img')[0].addEventListener('click', () => {
            // productcard.open();
            alert("hii")
        });
    });

    

    

    





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
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
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