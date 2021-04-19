import React from 'react'
import ProductCardStyle from './css/ProductCard.module.css'

const ProductCard = ({prod}) => {

        return ( 
             <div key={prod.id} className={ProductCardStyle.item}>
                <img className={ProductCardStyle.image} src={prod.image} alt={prod.title}/>
                <p className={ProductCardStyle.title}>{prod.title}</p>
                <p className={ProductCardStyle.price}> Price: ${prod.price}</p>
            </div>

        )     
}

export default ProductCard