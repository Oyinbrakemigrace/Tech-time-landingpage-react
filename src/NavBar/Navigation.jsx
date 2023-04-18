import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/techtime.png"

function Navigation() {
  return (
    <>
    <div className="navbar navbar-expand-md navbar-white">

<NavLink className="navbar-brand text-decoration-none mx-md-5 mx-3 mt-3"><img src={logo} alt="logo" className='logo' /></NavLink>

<button className="custom-toggler navbar-toggler navbar-dark border-none me-2" data-bs-target="#links" data-bs-toggle="collapse">
<span className="navbar-toggler-icon"></span>
</button>

<div className="navbar-collapse collapse" id="links">
<div className="nav navbar-nav m-auto me-5">

    <NavLink to={"/"} className="nav-item nav-link text-center text-white text-decoration-none">Home</NavLink>
    <NavLink to={"/about"} className="nav-item nav-link text-center text-white text-decoration-none">About</NavLink>
    <NavLink to={"/courses"} className="nav-item nav-link text-center text-white text-decoration-none">Courses</NavLink>
    <NavLink to={"/testimonial"} className="nav-item nav-link text-center text-white text-decoration-none">Testimonial</NavLink>
    <NavLink to={"/community"} className="nav-item nav-link text-center text-white text-decoration-none">Community</NavLink>
    <button className='navbtn btn rounded-0 border p-md-2 mx-4 bg-white'>Enroll now</button>
</div>
</div>
</div>
    </>
  )
}

export default Navigation