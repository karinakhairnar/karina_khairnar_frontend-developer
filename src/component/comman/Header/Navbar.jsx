import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
        <div className='logo'>
        <div >
        <Link to="/">
          SpaceX
        </Link>
        <Link to="/">
          Capsule
        </Link>
        <Link to="/">
          Signup
        </Link>
      </div>
        </div>

    </div>
  )
}
