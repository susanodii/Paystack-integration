import { useReducer } from "react";
import CartContext from "../../Context/CartContext";
import CartReducer from "./CartReducer"
import {sumItems} from "./CartReducer"


import React from 'react'

const CartState = ({children}) => {
//  initial state of the cart

const initialState = {
    cartItems : [],
    checkout :false,
};

// setting up of the reducer
const [state, dispatch] = useReducer(CartReducer, initialState);

// fuction to handle when an item is added from the cart

const addToCart = (payload) => {
    dispatch({type:"ADD_TO_CART", payload})
}

// function to handle when an item is in the cart is added again

const increase = (payload) => {
    dispatch({type:"INCREASE", payload});
};

// function to handle when an item is removed from the cart

const decrease = (payload) => {
    dispatch({type: "DECREASE", payload})

    }


    // function to remove an item from the cart

    const removeFromCart = (payload) => {
        dispatch({type:"REMOVE_ITEM", payload})
    };

    // function to clear cart
    const clearCart = () => {
        dispatch({type:"CLEAR"})
    }

    // function to handle when the user clicks the checkout button
    const handleCheckOut = () => {
        dispatch({type:"CHECKOUT" })
    }
 
    return (
    // add the function that have been defined above tnto the context provider and add on to the children

<CartContext.Provider
value={{
    showCart : state.showCart,
    cartItems :state.cartItems,
    addToCart,
     removeFromCart,
    increase,
    decrease,
    handleCheckOut,
    clearCart,
    ...state,
}}

>

    {children}
</CartContext.Provider>

  )
}


export default CartState
