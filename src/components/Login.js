import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/auctionjiyu.png'

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSumbit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className='credentialform'>

    <form onSubmit={handleSumbit}>
      <Link to="/"><img id='logonopage' src={logo} alt='Logo'/></Link>
      <h2>Log in </h2>
      <section className='credentialbox'>
      <label>Email:</label><br/>
      <input type='email' value={email} name='email' onChange={ (e) =>{ setEmail(e.target.value)}}/> <br/>

      <label>Password:</label><br/>
      <input type='password' value={password} name='password' onChange={ (e) =>{ setPassword(e.target.value)}}/> <br/>

      

  

      
     
      <br/>
      <button type='Submnit'>Log in</button><br/><br/>
      <Link to='/AccountRecovery' className='credentialquestion'>forgot password?</Link><br/>
     <Link className='credentialquestion' to='/sign_up'><button>Create an account</button> </Link>
      </section>
    

    </form>
    </div>
  )
}

export default Login