import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../../components/admin/adminNavbar'
import "../../css/admin/dashboard.css"
import { checkLogin } from '../../firebase/config'

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
      const data = checkLogin().then((e) => {
        // console.log(typeof e.cred)
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
        <div className="optionsSection"></div>
      </div>
    </>
  )
}

export default Dashboard