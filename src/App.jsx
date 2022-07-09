import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Items from "./pages/items"

const App = () => {
  return (
    <div className="w-screen h-screen m-0">
        <Navbar/>
        <div className="relative top-24">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:id" element={<Items/>} />
            </Routes>
        </div>
    </div>
  )
}

export default App
