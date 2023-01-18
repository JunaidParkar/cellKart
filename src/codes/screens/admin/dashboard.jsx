import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddProductScreen from '../../components/admin/addProductScreen'
import AdminNavbar from '../../components/admin/adminNavbar'
import TopNav from "../../components/admin/topNav"
import "../../css/admin/dashboard.css"
import { checkLogin } from '../../firebase/config'

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
      checkLogin().then((e) => {
        if (typeof "abc" == typeof e.cred) {
            if (e.cred == "nav") {
                navigate("/moin/login")
            }
        } else {
            navigate("/moin/login")
        }
      })
    }, [])
    
    


  return (
    <>
      <div className="dashboardContainer">
        <div className="navigationSection">
          <AdminNavbar />
        </div>
        <div className="optionsSection">
          <TopNav />
          <AddProductScreen />
        </div>
      </div>
    </>
  )
}

export default Dashboard