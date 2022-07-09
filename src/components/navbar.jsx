import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-slate-400">
        <div className="flex items-center justify-center h-full">
            <Link to="/">HyBrid Assign</Link>
        </div>
    </div>
  )
}

export default Navbar