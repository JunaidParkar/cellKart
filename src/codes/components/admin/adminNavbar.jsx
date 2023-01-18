import React from 'react'
import "../../css/admin/adminNavbar.css"
import { AiOutlineFolderAdd } from "react-icons/all"

const AdminNavbar = () => {
  return (
    <div className='adminNavbarContainer'>
        <div className="adminNavHeader">
            <h3><span>cell</span> kart</h3>
        </div>
        <div className="optionsContainer">
            <div className="optionsAdmin active">
                <div className="iconAdminNavbar">
                    <AiOutlineFolderAdd />
                </div>
                <div className="textAdminNavbar">Add product</div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar