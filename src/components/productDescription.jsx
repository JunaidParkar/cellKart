import React from 'react'
import '../css/productDescription.css'
import productcard from '../js/common';
import product from '../assets/product/p1.png'

const ProductDescription = () => {

    const productclose = () => {
        productcard.close()
    };
  return (
    <>
        <div className="prod-desc" id="prod-desc">
            <div className="box slide-top">
                <div className="prod-nav">
                    <img onClick={() => productclose()} src="https://img.icons8.com/ios/256/long-arrow-left.png" alt="" />
                </div>
                <div className="img">
                    <img src={product} alt="" />
                    <div className="heart active"></div>
                </div>
                <div className="img-container">
                    <img src={product} alt="" />
                    <img src={product} alt="" />
                    <img src={product} alt="" />
                    <img src={product} alt="" />
                </div>

                <div className="content">
                    <div className="brand">
                        <div className="dot"></div>vivo
                    </div>
                    <div className="title">Lorem ipsum dolor sit.
                    </div>
                    <div className="price">
                        <p>Price : </p>
                        <div className="selling">$100</div>
                        <div className="cutting">$120</div>
                        <div className="buy">
                            <img src="https://img.icons8.com/material/1x/whatsapp--v6.png" alt="" />buy now<span> on whatsapp</span>
                        </div>
                    </div>
                    <div className="ram">
                        <p>Ram :
                            <select name="" id="">
                                <option value="">4</option>
                                <option value="">6</option>
                            </select>
                        </p>
                    </div>
                    <div className="desc">
                        <p>Description : </p>
                        <ol>
                            <li>6.38-inch (1080x2340 pixels) FHD+ Super AMOLED display with 19.5:9 aspect ratio</li>
                            <li>Octa-Core MediaTek Helio P65 SoC with up to 6GB of RAM</li>
                            <li>Triple rear cameras (16MP primary + 8MP wide-angle + 2MP depth)</li>
                            <li>32MP front camera with f/2.0 aperture</li>
                            <li>Funtouch OS 9 based on Android 9.0 Pie</li>
                            <li>4,500mAh battery with 18W Dual-Engine fast charging</li>
                            <li>In-display fingerprint sensor</li>
                            <li>3.5mm audio jack, FM Radio</li>
                            <li>Dual 4G VoLTE, Wi-Fi 802.11 ac (2.4GHz + 5GHz), Bluetooth 5, GPS + GLONASS</li>
                        </ol>
                        <pre />
                    </div>

                    <div className="desc terms">
                        <p>About phone : </p>
                        <ol>
                            <li>second hand phone 2yrs old buyed on 2018</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorum?</li>
                            <li>Necessitatibus doloribus qui enim tenetur corrupti ipsum veniam hic rerum!</li>
                            <li>Omnis recusandae ratione voluptatem suscipit totam ea beatae expedita nulla?</li>
                            <li>Eos nihil fuga quis necessitatibus laudantium sint nisi qui similique.</li>
                            <li>Aspernatur, qui? Qui magnam officiis quia adipisci hic recusandae dolore.</li>
                            <li>Culpa enim nam laboriosam sunt natus inventore, ipsum ipsa unde.</li>
                        </ol>
                        <pre />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDescription