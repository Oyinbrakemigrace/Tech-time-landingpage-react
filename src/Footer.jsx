import React from 'react'
import logo from "./assets/techtime.png"
import { NavLink } from 'react-router-dom'
import fb from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import yt from "./assets/youtube.png"
import discord from "./assets/discord.png"

const Footer = () => {
  return (
    <div className='footer container-fluid'>
        <div className="row">
            <div className="col-md-3 col-12 p-5">
                <div>
                    <img src={logo} alt="" className='my-3' />
                </div>
                <small className='text-white fw-light fs-6'>Reach out to us on any of our social media networks</small>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <NavLink><img src={fb} alt="" className='my-3' /></NavLink>
                    <NavLink><img src={twitter} alt="" className='my-3' /></NavLink>
                    <NavLink><img src={yt} alt="" className='my-3'/></NavLink>
                    <NavLink><img src={discord} alt="" className='my-3'/></NavLink>
                </div>
            </div>

            <div className="col-md-3 col-12 p-5">
                <h3 className='fw-bold text-white my-3'>Useful Links</h3>
                <div className='d-flex flex-column'>
                    <NavLink className='text-decoration-none text-white'>Home</NavLink>
                    <NavLink className='text-decoration-none text-white'>About us</NavLink>
                    <NavLink className='text-decoration-none text-white'>Our Courses</NavLink>
                    <NavLink className='text-decoration-none text-white'>Testimonials</NavLink>
                    <NavLink className='text-decoration-none text-white'>Our Community</NavLink>
                </div>
            </div>

            <div className="col-md-3 col-12 p-5">
                <h3 className='fw-bold text-white my-3'>Community</h3>
                <div className='d-flex flex-column'>
                    <NavLink className='text-decoration-none text-white'>Help Centers</NavLink>
                    <NavLink className='text-decoration-none text-white'>Partners</NavLink>
                    <NavLink className='text-decoration-none text-white'>Suggestion</NavLink>
                    <NavLink className='text-decoration-none text-white'>Blog</NavLink>
                    <NavLink className='text-decoration-none text-white'>Newsletter</NavLink>
                </div>
            </div>

            <div className="sub col-md-3 col-12 p-5 my-3">
                <h3 className="fw-bold text-white">Subscribe us</h3>
                <input type="text" placeholder='nft123@gmail.com' className='input'/>
                <button className='button'> Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Footer