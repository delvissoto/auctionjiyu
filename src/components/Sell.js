import React from 'react'

const Sell = () => {
  return (
    <div className='sellpage'>
    
    <section className='Sellingsection'>
    <form>
      <h2>Tell us about your item... </h2>
      
      <input className='sellinginput' type='text' placeholder='Item name'/><br/>

      
      <input className='sellinginput' type='text' placeholder='Condition'/><br/>

  
      <input className='sellinginput' type='text' placeholder='Year'/><br/>

     
      <input className='sellinginput' type='text' placeholder='Operation Status'/><br/>

     
      <input className='sellinginput' type='text' placeholder='Description'/><br/>

      
      <input className='sellinginput' type='text' placeholder='Features'/><br/>

      
      <input className='sellinginput' type='text' placeholder='Owner'/><br/>

      
      <input className='sellinginput' type='text' placeholder='Title Asset?'/><br/>
      {/* if title ask for Vin # */}

      
      <input className='sellinginput'type='text' placeholder='Location'/><br/>
      {/* use google maps for location */}

      
      <input className='sellinginput' type='text' placeholder='Contact phone #'/><br/>

     
      <input className='sellinginput' type='text' placeholder='Visisting '/><br/>

      <input className='sellinginput' type='file'/>
      <input className='sellinginput' type='file'/>
      <input className='sellinginput' type='file'/>'<input className='sellinginput' type='file'/>'

      <p className='tac'><input type='checkbox'/>I read and accept the terms and contions. </p>
      <input className='sellinginput'  type='submit' />
      
       </form>
    </section>
  
    
    
    </div>
  )
}

export default Sell