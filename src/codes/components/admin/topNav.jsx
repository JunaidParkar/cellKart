import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import "../../css/admin/topNav.css"

const TopNav = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [hamburger, setHamburger] = useState(true)

    useEffect(() => {
        window.innerWidth < 1080 ? setIsMobile(true) : setIsMobile(false)
    }, [])
    


  return (
    <div className='topNavContainer'>
        <div className="secttOne">
            <div className={isMobile ? "toggler active" : "toggler"}>
                { hamburger ? <RxHamburgerMenu /> : <AiOutlineClose /> }
            </div>
            <div className={isMobile ? "title gap" : "title"}>
                add product
            </div>
        </div>
        <div className="logoutContainer">
            <input type="button" value="log out" />
        </div>
    </div>
  )
}

export default TopNav