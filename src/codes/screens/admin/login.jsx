import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"; 
import "../../css/admin/login.css"
import { fireStore } from '../../firebase/config';

const Login = () => {

    const [credentialsByUser, setCredentialsByUser] = useState({
        username: "",
        password: ""
    })

    const updateTypedCredentials = (e) => {
        setCredentialsByUser({...credentialsByUser, [e.target.name]: e.target.value})
    }

    const login = async (e) => {
        e.preventDefault()
        const querySnapshot = await getDocs(collection(fireStore, "admin"));
        querySnapshot.forEach((doc) => {
        localStorage.setItem("cred",`${Math.floor(Math.random() * 10000000000)}.${doc.data().password}.${doc.id}.${doc.data().username}.${Math.floor(Math.random() * 10000000000)}`)
        console.log(localStorage.getItem("cred"))
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
                    <p className="error"></p>
                </div>
                <div className="inputs">
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" placeholder='Enter password' value={credentialsByUser.password} onChange={(e) => updateTypedCredentials(e)} required />
                    <p className="error"></p>
                </div>
                <div className="changableOptions">
                    <Link>Change username??</Link>
                    <Link>change password??</Link>
                </div>
                <div className="submitSection">
                    <input type="submit" value="Log in" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login