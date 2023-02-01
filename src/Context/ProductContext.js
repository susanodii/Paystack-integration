

import React, { createContext, useContext, useEffect, useState}  from 'react'

const ProductContext = createContext()

export const ProductProvider = ({children})=> {

    const[products, setProducts] = useState([])
    const [data, setData]  = useState(null)

    useEffect(() =>{

        fetch('https://dummyjson.com/products')
        .then(res=> res.json())
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            setData(data)
        })
    }, [])


    const onSearchChange = (e) => {
        const filteredRobots = data.filter(products =>{
          return products.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setProducts(filteredRobots)
        if(e.target.value.length < 1)
        setProducts(data)
      }


      return(
        <ProductContext.Provider
        value={
{

    products,
    onSearchChange,
    
} }>
    {children={}}
</ProductContext.Provider>


      )


}


export default ProductContext