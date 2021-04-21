import React, {useState} from 'react'
import ProductCardStyle from './css/ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = ({prod}) => {
    console.log("prod", prod)

    const [product, setProduct] = useState({});
        
    
            const handleClick = () => {
                console.log("card", prod); 
                setProduct(prod)
            
                console.log("value", product)
                console.log("setProduct", setProduct)
            }

        return ( 
             <div key={42443434} className={ProductCardStyle.item}>
                 <a className={ProductCardStyle.all} >
                <img className={ProductCardStyle.image} src={prod.image} alt={prod.title}/>
                <p className={ProductCardStyle.title}>{prod.title}</p>
                <p className={ProductCardStyle.price}> Price: ${prod.price}</p>
                {/* <button className={ProductCardStyle.button}>View item</button> */} </a>
                <Link to={{ 
                    pathname: `product/${prod.id}`, 
                    prod: {prod}
                    }} 
                    className={ProductCardStyle.button} 
                    onClick={handleClick}> 
                    View item
                </Link> 
            </div>
        )     
}

export default ProductCard