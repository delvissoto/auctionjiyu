import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/auctionjiyu.png'

const NoPage = () => {
  return (
   <div className='nopage'>
   <section className='nopagesection'>
   <Link to="/"><img id='logonopage' src={logo} alt='Logo'/></Link>
   <h2 className='nopagemessage rubik-pixels-regular'>This Page is Not Avalabale</h2>
   </section>
   </div>
  )
}

export default NoPage