import React, {useContext} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import { Link } from 'react-router-dom'
import CategoryStyle from './css/category.module.css'
import Logo from "./Logo"
import ProductCard from "./ProductCard.js"
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import CartButton from "./CartButton"

function Womenswear() {

  const  product  = useContext(ProductsContext)
  console.log(product)

    function filterProduct() {
      const selectedProduct = product.products.filter((item) => item.category === "women's clothing");
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

export default Womenswear