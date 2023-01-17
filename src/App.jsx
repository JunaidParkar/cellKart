import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './codes/screens/admin/dashboard';
import Login from './codes/screens/admin/login';
import Landing from "./codes/screens/landing"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/moin/login' element={<Login />} />
          <Route path='adm/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
