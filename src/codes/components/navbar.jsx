import React,{ useState } from 'react'
import "../css/navbar.css"
import { BiSearch, AiOutlineWhatsApp , MdOutlineSell } from "react-icons/all"

const Navbar = () => {

    const [isSearchable, setIsSearchable] = useState(false)


  return (
    <>
        <div className='navbarMain'>
            <div className="icon">
                <span>Cell</span> kart
            </div>
            <div className="options">
                <div className="search" onClick={ () => setIsSearchable(!isSearchable)}>
                    <BiSearch />
                </div>
                <div className="whatsapp">
                    <AiOutlineWhatsApp />
                </div>
                <div className="sellBTN">
                    <p><MdOutlineSell size={15} /> sell an item</p>
                </div>
            </div>
        </div>

        <div className={isSearchable ? "searchBar show" : "searchBar hide"}>
            <input type="text" placeholder='IPhone 14 Pro Max' name="" id="" />
            <input type="button" value="Search" />
        </div>
    </>
  )
}

export default Navbar