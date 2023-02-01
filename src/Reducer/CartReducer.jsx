import {
    ADD_TO_CART,
    CHECKOUT,
    CLEAR,
    DECREASE,
    INCREASE,
    REMOVE_ITEM,
} from '../Pages/Cart/CartTypes'

// Export function to calculate the totak price of the cart and the total quantity of the cart

    export const sumItems = (cartItems) => {
        Storage(cartItems);
        let itemCount = cartItems.reduce(
            (total, product) => total + product.quantity,
            0
        )
       
       
        // let total = cartItems
        // .reduce((total, product)
        // )
     
        // return {itemCount, total };


    }

// export default CartReducer