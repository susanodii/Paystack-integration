import { Secret} from '../config'

import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const Customer = () => {
 
 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('')
 const [first_name, setFirstName] = useState('')
 const [last_name, setLastName] = useState('')

    const handleSubmit =async function(form){
form.preventDefault()
alert('Successful Registration')
    
try {
    
    const res = await axios.post('https://api.paystack.co/customer', 
{
    email,
    phone,
    first_name,
    last_name
},
{

    headers :{
        "Content-Type":"application/json",
        Authorization : `Bearer ${Secret}`
    }
}
)
if (res){
    console.log(res.data);
    form.target.reset()
}
} catch (error) {
    
    console.log(error);
}


}
 
 
    return (
  
    <div className='form-payement-container'>
    <form onSubmit={handleSubmit}>
        
    <label htmlFor="email">Email Address</label>
        <input type="email" id="email-address" placeholder="Your email.." onChange={(e)=>{setEmail(e.target.value)}} required />
        
          <label htmlFor="amount">Phone</label>
          <input type="tel" id="amount" placeholder="Phone.."onChange={(e)=>{setPhone(e.target.value)}} required />


        
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."  onChange={(e)=>{setFirstName(e.target.value)}} />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(e)=>{setLastName(e.target.value)}} />
    
      
      
     
     
      <button className='pay-btn' type='submit'> Create</button>
      
    </form>
  </div>
  )
}

export default Customer