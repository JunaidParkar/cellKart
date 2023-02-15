import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import AddProduct from './pages/addProduct'
import AdminLogin from './pages/adminLogin'
import AdminPanel from './pages/adminPanel'
import MainPage from './pages/mainPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/codes' element={<AdminLogin />} />
          <Route path='/codes/admin' element={<AdminPanel />} />
          <Route path='/codes/admin/addproducts' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
