import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const navigate=useNavigate()
  return (
    <div className='nav'>
        <button onClick={()=>navigate("/fooditem")}>Fetch Food</button>
        <button onClick={()=>navigate("/topitem")}>Top Food</button>
        <h4 onClick={()=>navigate("/")} style={{color:'white',cursor:"pointer"}}>Logout</h4>
    </div>
  )
}

export default Navbar