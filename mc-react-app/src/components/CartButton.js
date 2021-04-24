import React from 'react'
import Cart from "./Images/cart.png"
import CategoryStyle from './css/category.module.css'

class CartButton extends React.Component {

    
    
    
    render() {

        return (
            <div>
                <p className={CategoryStyle.cartbutton}>
                    <a href="/cart"> View Cart</a>
                    <a href="/cart"> <img className={CategoryStyle.cartlogo} src={Cart} alt="cart"/></a>
                </p>
            </div>

        )
    }
}

export default CartButton