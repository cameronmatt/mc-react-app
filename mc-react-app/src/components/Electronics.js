import React, {useContext} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import { Link } from 'react-router-dom'
import CategoryStyle from './css/category.module.css'
import Logo from "./Logo"
import ProductCard from "./ProductCard.js"
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import CartButton from "./CartButton"

function Electronics() {

    const  product  = useContext(ProductsContext)
        

        function filterProduct() {
          const selectedProduct = product.products.filter((item) => item.category === 'electronics');
          return selectedProduct
        }

        return ( 
    
        <div className={CategoryStyle.catcontainer} key={product.id}>
          <Logo />
          <SearchBar className={CategoryStyle.search}/>
          <CartButton className={CategoryStyle.cart}/>
          <Nav />
          <div>
              {filterProduct().map(prod => (
                  <div className={CategoryStyle.card}>
                      <ProductCard prod={prod}/>
                  </div>
                  ))}    
          </div>
        </div>
          
        )
}

export default Electronics