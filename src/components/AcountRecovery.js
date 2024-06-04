import React from 'react'
import { Link } from 'react-router-dom'
import forgotImage from '../images/forgotPassword.webp'

const AcountRecovery = () => {
  return (
    <div className='forgotPassword'>
      <section>
      <img id='forgotImage' src={forgotImage} alt='exclamation mark'/>
      <form>
        
        <h2>Forgot Password</h2>
        <p>Enter your email and we'll send you a link to reset your password.</p>
        <input type='email' required placeholder='ex: user@email.com'/><br/>
        <input type='Submit'/><br/>
        <Link to='/log_in'> Back to Login</Link>
        </form>
        </section>
    </div>
  )
}

export default AcountRecovery