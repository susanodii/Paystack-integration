import React from 'react'
import { useNavigate, } from 'react-router-dom';
import PaystackPop from "@paystack/inline-js"
import { useState } from 'react';



const Payment = () => {

// integrating paystack

const [email, setEmail] = useState("")
const [amount, setamount] = useState("")
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")

const PayWithPaystack= function(e){
 e.preventDefault()
//  alert(1)
 const paystack = new PaystackPop()
//  const patstack = new Paystack()
paystack.newTransaction({
  key:"pk_test_f8bcd4d1072f816d0de4893fc528ef98f1928b78",
  amount:amount,
  email,
  firstname,
  lastname
})
}
 
  const navigate = useNavigate();
 
   const navigateToCustomer =() => {
   navigate('/Customer')
   };
 
  return (
  
    <div className='form-payement-container'>
    <form  className='form-pay-submit' >
        
    <label htmlFor="email">Email Address</label>
        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} id="email-address" placeholder="Your email.." required />
        
          <label htmlFor="amount">Amount</label>
          <input type="tel" value={amount} onChange={(e) =>setamount(e.target.value)} id="amount" placeholder="Amount.." required />


        
      <label htmlFor="fname">First Name</label>
      <input type="text" value={firstname} onChange={(e) =>setFirstname(e.target.value)} id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" value={lastname} onChange={(e) =>setLastname(e.target.value)} id="lname" name="lastname" placeholder="Your last name.." />
    
      
     <button className='pay-btn'onClick={PayWithPaystack}> Pay</button>
   
    </form>
    <div className='become-our-customer-button'>
<p className='become-a-customer'>Not yet a customer?</p>
<button className='click-become-customer' onClick={navigateToCustomer}>Become a customer</button>
    </div>
    </div>
  
  )
}

export default Payment