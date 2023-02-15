import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/admin/login.css"
import loginUser from '../firebase/admin/loginAdmin'

const AdminLogin = () => {

    const [adminData, setAdminData] = useState({
        username: "",
        password: ""
    })
    const [isValidAdmin, setIsValidAdmin] = useState(false)

    const navigate = useNavigate()

    const handelData = (e) => {
        setAdminData({...adminData, [e.target.name]: e.target.value})
    }

    console.log(adminData)

    const handelLogin = async (e, data) => {
        e.preventDefault()
        const login = loginUser(data)
        await login.then(data => {
            data ? navigate("/codes/admin") : alert("something went wrong")
        })
    }


  return (
    <>
        <div className="mainDivContainer">
            <form className='loginForm' method='post' onSubmit={(e) => handelLogin(e, adminData)}>
                <h3 className='adminLoginHeading'>admin panel login</h3>
                <div className="inputWrappers">
                    <label htmlFor='username'>username</label>
                    <input type="text" name="username" id="username" onChange={e => handelData(e)} placeholder='Enter admin username' required />
                </div>
                <div className="inputWrappers">
                    <label htmlFor='password'>password</label>
                    <input type="text" name="password" id="password" onChange={e => handelData(e)} placeholder='Enter admin password' required />
                </div>
                <div className="inputWrappers forgotBtnContainer">
                    <Link>forgot password??</Link>
                </div>
                <div className="inputWrappers loginBtn">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    </>
  )
}

export default AdminLogin