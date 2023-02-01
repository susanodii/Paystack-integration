import React, {useEffect, useState}  from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom';

import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [fetchData, setFetchData] = useState([])

 
  
 
  useEffect(() => {
fetchProducts()
  }, [])
 
 const fetchProducts = () => {
   axios
    .get('https://dummyjson.com/products')
    .then((res) =>{

      setFetchData(res.data)
      setProducts(res.data.products)
   console.log(res.data.products)
    })
    
  .catch((err) => {
     console.log(err)
    })

  }

  
  const navigate = useNavigate();
 
  const navigateToPayment = () => {
    // 👇️ navigate to /payment
    navigate('/Payment');
  };
  
    return (
   
   
   <div>
      
     
     
    <div className='item-container' >
{products && products.map((product) =>(
<div className='card' key={product.id}>
<div className='images-card'>
  
<img src={product.images[0]} alt=''/>
</div>
<h3> {product.title}</h3>
<h3>{product.price} $</h3>
<p className='products-details'>{product.description}</p>
<button onClick={navigateToPayment} className='add-to-cart' > BUY NOW</button>

</div>
))}
 </div>
         

 


       </div>
  )
}

export default Products