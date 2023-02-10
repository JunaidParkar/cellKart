import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container-l">
                <div className="box">
                    <p>About</p>
                    <div className="small-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quo nulla
                        explicabo accusantium.
                        Quaerat, quos!
                    </div>
                </div>

                <div className="box">
                    <div className="f-list">
                        <ul>
                            <b>Solutions</b>
                            <li><a href="">brands</a></li>
                            <li><a href="">sell your phone</a></li>
                            <li><a href="">privacy</a></li>
                            <li><a href="">terms and condition</a></li>
                            <li><a href="">enquiry</a></li>

                        </ul>
                        <ul>
                            <b>Partners</b>
                            <li><a href="">zestlark</a></li>
                            <li><a href="">verix</a></li>
                        </ul>
                        <ul>
                            <b>contact</b>
                            <li><a href="mainto:email@gmai.com">email@gmai.com</a></li>
                            <li><a href="">call us</a></li>
                        </ul>
                        <ul className="social">
                            <b>social</b>
                            <div className="s-box">
                                <li><a href=""><img src="https://img.icons8.com/material/1x/instagram-new.png" alt="" /></a>
                                </li>
                                <li><a href=""><img src="https://img.icons8.com/material/1x/facebook-new.png" alt="" /></a>
                                </li>
                                <li><a href=""><img src="https://img.icons8.com/material/1x/youtube.png" alt="" /></a></li>
                                <li><a href=""><img src="https://img.icons8.com/material/1x/whatsapp--v6.png" alt="" /></a>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className="last">
                        @ All rights reserved
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer