import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../images/auctionjiyu.png'


const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
    <Link to="/"><img id='logo' src={logo} alt='Logo'/></Link>
        <ul className='navsec1'>
            <li className='navLinks'><Link to='/auction'>Auction</Link></li>
            <li className='navLinks'><Link to='/sell'>Sell</Link></li>
            {/* <li className='navLinks'><Link to='/shipping'>Shipping</Link></li> */}
            <li className='navLinks'><Link to='/about'>About</Link></li>
            <li className='navLinks'><Link to='/my_profile'>Profile</Link></li>
            
        </ul>
        <ul  className='navsec2'>
        <li className='navLinks'><Link to='/log_in'>LogIn</Link> / <Link to='/sign_up'>SignUp</Link></li>
        <input type='search' placeholder='Search'/>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar