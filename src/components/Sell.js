import React from 'react'

const Sell = () => {
  return (
    <>
    <form>
    <section>
      <h2>Tell us about your item... </h2>
      <label>Item Name:</label>
      <input type='text'/><br/>

      <label>Condition :</label>
      <input type='text'/><br/>

      <label>Year :</label>
      <input type='text'/><br/>

      <label> Operational Status :</label>
      <input type='text'/><br/>

      <label>Description :</label>
      <input type='text'/><br/>

      <label>Features:</label>
      <input type='text'/><br/>

      <label>Legal Owner:</label>
      <input type='text'/><br/>

      <label>Title Asset? :</label>
      <input type='text'/><br/>
      {/* if title ask for Vin # */}

      <label>Location :</label>
      <input type='text'/><br/>
      {/* use google maps for location */}

      <label>Contact Info:</label>
      <input type='text'/><br/>

      <label>Visiting Hours:</label>
      <input type='text'/><br/>
    </section>
    <p><input type='checkbox'/>I read and accept the terms and contions. </p>

    <input type='submit' />
    </form>
    </>
  )
}

export default Sell