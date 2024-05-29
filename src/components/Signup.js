import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/auctionjiyu.png'


const Signup = () => {

  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('')
  const [tac, setTac] = useState(false)
  const [state, setState]= useState('')
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('')

  const handleSumbit = (e) =>{
    e.preventdefault()
  }

  


  return (
    <>

    <form onSubmit={handleSumbit}>
      <Link to="/"><img id='logonopage' src={logo} alt='Logo'/></Link>
      <h2>Register</h2>
      <label>Email:</label><br/>
      <input type='email' value={email} name='email' onChange={ (e) =>{ setEmail(e.target.value)}}/> <br/>

      <label>Password:</label><br/>
      <input type='password' value={password} name='password' onChange={ (e) =>{ setPassword(e.target.value)}}/> <br/>

      <label>Re-enter Password:</label><br/>
      <input type='password' value={repassword} name='repassword' onChange={ (e) =>{ setRepassword(e.target.value)}}/> <br/>

      <label>Phone number:</label><br/>
      <input type='number' value={phone} name='phone'onChange={ (e) =>{ setPhone(e.target.value)}}/>  <br/>

      <label>Address:</label><br/>
      <input type='text' value={address} name='address' onChange={ (e) =>{ setAddress(e.target.value)}} /> <br/>

      <label>State:</label><br/>
      <input type='text' value={state} name='state' onChange={ (e) =>{ setState(e.target.value)}}/> <br/>

      <label>City:</label><br/>
      <input type='text' value={city} name='city' onChange={ (e) =>{ setCity(e.target.value)}}/> <br/>

      <label>Zip code:</label><br/>
      <input type='number' value={zipcode} name='zipcode' onChange={ (e) =>{ setZipcode(e.target.value)}}/> <br/>

      <label>Date of Birth:</label><br/>
      <input type='date' value={dob} name='dob' onChange={ (e) =>{ setDob(e.target.value)}}/> <br/>

      <input type='checkbox' value={tac} onChange={ (e) =>{ setTac(e.target.value)}}/> <br/>


      <button type='Submnit'>Register</button>

    </form>
    </>
  )
}

export default Signup