import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkAdminLogin } from '../firebase/admin/loginAdmin'
import "../css/admin/adminPanel.css"

const AdminPanel = () => {

    useEffect(() => {
      const checkLoginStatus = async () => {
        await checkAdminLogin().then(data => {
            if (!data) {
                navigate("/")
            }
        })
      }
      checkLoginStatus()
    }, [])

    const navigate = useNavigate()


  return (
    <>
        <div className="mainContainerAdmin">
            <div className="boxContainerMain">
                <h3>Admin Panel</h3>
                <Link to="/codes/admin/addproducts" ><h4>add product</h4></Link>
                <Link to="/codes/admin/removeProducts" ><h4>Remove Product</h4></Link>
                <Link to="/" onClick={() => localStorage.clear()} >Log out</Link>
            </div>
        </div>
    </>
  )
}

export default AdminPanel