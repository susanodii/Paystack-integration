import React from 'react'

const Payment = () => {
  return (
  
    <div className='form-payement-container'>
    <form >
        
    <label htmlFor="email">Email Address</label>
        <input type="email" id="email-address" placeholder="Your email.." required />
        
          <label htmlFor="amount">Amount</label>
          <input type="tel" id="amount" placeholder="Amount.." required />


        
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    
      
      
     
     
      <button className='pay-btn'> Pay</button>
    </form>
  
  </div>
  )
}

export default Payment