import React, {useContext} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import { Link } from 'react-router-dom'
import CategoryStyle from './css/category.module.css'
import bluff from "./Images/bluff.png"
import ProductCard from "./ProductCard.js"

function Jewelery() {

        const  product  = useContext(ProductsContext)
    
          function filterProduct() {
            const selectedProduct = product.products.filter((item) => item.category === 'jewelery');
            return selectedProduct
          }

        return ( 
            
            <div className={CategoryStyle.catcontainer}>
                <img className={CategoryStyle.logo} src={bluff} alt="logo"/>
                <Link className={CategoryStyle.back} to="/">Back</Link>
                <div>
                    {filterProduct().map(prod => (
                        <div>
                            <ProductCard prod={prod}/>
                        </div>
                        ))}    
                </div>
            </div>
            
            )
        
}

export default Jewelery