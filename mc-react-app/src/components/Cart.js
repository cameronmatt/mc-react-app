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

    function deleteProducts(prod) {
        console.log('outside', prod)
        if(window.confirm("Are you sure you want to remove this item?")){
            console.log('inside', prod)
            fetch( 'http://localhost:3000/cart/'+(prod), {
                method: 'DELETE',
                // headers: {
                //   'Accept': 'application/json', 
                //   'Content-Type': 'application/json'
                // },
                //body: JSON.stringify(null)
            })
            .then(res => res)
        }
      //fetchProducts()
    }
      
      

    return(
        <div className={CartPageStyle.catcontainer} key={98798798790}>
            <p className={CartPageStyle.logo}><Logo /></p>
            <p className={CartPageStyle.search}><SearchBar /></p>
            <p className={CartPageStyle.cart}><CartButton /></p>
            <p className={CartPageStyle.nav}><Nav /></p>
            <div className={CartStyle.container}>
                <ul className={CartStyle.list}>
                    {products.map(prod => (
                        <li className={CartStyle.item}>           
                            <p className={CartStyle.title}>{prod.title}</p>
                            <p className={CartStyle.price}>${prod.price}</p>
                            <p className={CartStyle.removeContainer}>
                                <button onClick={(e) => {
                                    e.target.parentElement.parentElement.remove()
                                    console.log("event", e.target.parentElement.parentElement)
                                    deleteProducts(prod.id)
                                    }} 
                                    className={CartStyle.remove}>X</button>
                            </p>
                        </li>
                    ))}
                </ul>    
            </div>
        </div>
    )
}
export default Cart