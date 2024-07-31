import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-div'>
        <ul>
            <div className='nav-div-d1'>
            <li>
                {/* Navigate Without Reloading page */}
                <Link to="/" style={{textDecoration:"none"}}>Home</Link>
            </li>
            </div>

            <div className='nav-div-d2'>
            <li>
                <Link to="/signup" style={{textDecoration:"none"}}>SignUp</Link>
            </li>
            
            <li>
                <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
            </li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar