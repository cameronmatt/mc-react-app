import React, {useContext} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import { Link } from 'react-router-dom'
import CategoryStyle from './css/category.module.css'
import bluff from "./Images/bluff.png"
import ProductCard from "./ProductCard.js"
import Nav from "./Nav"

function Menswear() {

        const  product  = useContext(ProductsContext)
    
          function filterProduct() {
            const selectedProduct = product.products.filter((item) => item.category === 'men clothing');
            return selectedProduct
          }

        return ( 
            
            <div className={CategoryStyle.catcontainer} key={product.id}>
                <div >
                    <img className={CategoryStyle.logo} src={bluff} alt="logo"/>
                </div>
                <div className={CategoryStyle.back} >
                    <Link to="/">Back</Link>
                    <Nav />
                </div>
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

export default Menswear