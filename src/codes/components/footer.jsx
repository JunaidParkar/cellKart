import React from 'react'
import "../css/footer.css"
import { GrSend } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='footerMain'>
        <div className="sectionOne">
            <div className="newsletter">
                <div className="newsletterHeaders">
                    <h3>don't miss out any sale. stay tuned by our email news letter</h3>
                    <p>recieve emails of sails and new products launch</p>
                </div>
                <div className="newsletterInputs">
                    <h3>email</h3>
                    <div className="inputs">
                        <input type="email  " placeholder='Enter your email' required/>
                        <div className="submitBtn">
                            <GrSend />
                        </div>
                    </div>
                </div>
            </div>
            <div className="developer">
                <h3>developers</h3>
                <div className="developersList">
                    <a href="http://verix.ml" target="_blank" rel="noopener noreferrer">verix</a>
                    <a href="http://zestlark.ml" target="_blank" rel="noopener noreferrer">zestlark</a>
                </div>
            </div>
            <div className="customerService">
            <h3>developers</h3>
                <div className="developersList">
                    <p>contact us</p>
                    <p>mail us</p>
                </div>
            </div>
        </div>
        <div className="sectionTwo">
            <p>all rights are reserved</p>
        </div>
    </div>
  )
}

export default Footer