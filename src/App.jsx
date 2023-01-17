import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './codes/screens/admin/login';
import Landing from "./codes/screens/landing"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/moin' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
