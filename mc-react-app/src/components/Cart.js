import React, { useState, useEffect } from 'react'
import CartStyle from './css/Cart.module.css'
import CartPageStyle from './css/CartPage.module.css'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import CartButton from "./CartButton"

function Cart() {

    const [products, setProducts] = useState([])
    console.log("state", products)
    //fetches data, converts to json and resets the state
    const fetchProducts = () => {
        fetch('http://localhost:3000/cart/')
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            //console.log('cart-fetch',data)
            
          })
        .catch(firstGetError => console.log(firstGetError))
      }
  // Waits for components to mount then calls fetch
      useEffect(fetchProducts, [])

    //   function filterProduct() {
    //     const selectedProduct = products.map((item) => 
    //         return selectedProduct)
             
    //     }

    return(
        <div className={CartPageStyle.container} key={98798798790}>
        <Logo className={CartPageStyle.logo}/>
        <SearchBar className={CartPageStyle.search}/>
        <CartButton className={CartPageStyle.cart}/>
        <Nav />
            <div className={CartStyle.container}>
                    <ul className={CartStyle.list}>
                    {products.map(prod => (
                                <li className={CartStyle.item}>
                                    
                                        <p className={CartStyle.title}>{prod.title}</p>
                                        <p className={CartStyle.price}>{prod.price}</p>
                                        <p className={CartStyle.qty}>{prod.length}</p>
                                        <p className={CartStyle.remove}>Remove</p>
                                
                                </li>
                                ))}
                    </ul>    
            </div>
        </div>
    )

}
export default Cart