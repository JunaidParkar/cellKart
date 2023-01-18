import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"; 
import "../../css/admin/login.css"
import { fireStore } from '../../firebase/config';

const Login = () => {

    const [credentialsByUser, setCredentialsByUser] = useState({
        username: "",
        password: ""
    })
    const [isDisabled, setIsDisabled] = useState(false)
    const [UsernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const navigate = useNavigate()

    const updateTypedCredentials = (e) => {
        setCredentialsByUser({...credentialsByUser, [e.target.name]: e.target.value})
    }


    const login = async (e) => {
        e.preventDefault()
        document.getElementById("button").value = "Logging in"
        setIsDisabled(true)
        const querySnapshot = await getDocs(collection(fireStore, "admin"));
        querySnapshot.forEach((doc) => {
            if (credentialsByUser.username == doc.data().username) {
                setUsernameError(false)
                if (credentialsByUser.password == doc.data().password) {
                    localStorage.setItem("cred",`${Math.floor(Math.random() * 10000000000)}.${doc.data().password}.${doc.id}.${doc.data().username}.${Math.floor(Math.random() * 10000000000)}`)
                    setIsDisabled(false)
                    setPasswordError(false)
                    navigate('/adm/dashboard')
                } else {
                    setIsDisabled(false)
                    setPasswordError(true)
                }
            } else {
                setUsernameError(true)
                setIsDisabled(false)
            }
        });
    }



  return (
    <div className='loginMain'>
        <div className="adminLoginContainer">
            <div className="headerAdminLogin">
                <h3>admin login</h3>
            </div>
            <form className="loginMainSectionAdmin" onSubmit={(e) => login(e)}>
                <div className="inputs">
                    <label htmlFor="username">user name</label>
                    <input type="text" name="username" id="username" placeholder='Enter Username' value={credentialsByUser.username} onChange={(e) => updateTypedCredentials(e)} required />
                    <p className="error">{UsernameError ? "Wrong username" : ""}</p>
                </div>
                <div className="inputs">
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" placeholder='Enter password' value={credentialsByUser.password} onChange={(e) => updateTypedCredentials(e)} required />
                    <p className="error">{passwordError ? "Wrong password" : ""}</p>
                </div>
                <div className="changableOptions">
                    <Link>Change username??</Link>
                    <Link>change password??</Link>
                </div>
                <div className="submitSection">
                    <input disabled={isDisabled} type="submit" id='button' value="Log in" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login