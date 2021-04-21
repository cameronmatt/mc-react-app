import React, {useState} from 'react'
import ProductPageStyle from './ProductPage.module.css'

function ProductPage(props) {

        console.log("item", props)
        // renders product images and information to the DOM
        return (
        <div className="card" key={"545"}>
            <div  >
                <div className={ProductPageStyle.prodcontainer}>
                    <a className={ProductPageStyle.title}>{props.location.prod.prod.title}</a>
                    <img className={ProductPageStyle.image} src={props.location.prod.prod.image} alt={props.location.prod.prod.title}/>
                        <div className={ProductPageStyle.price}>
                            <p id="price"> Price: ${props.location.prod.prod.price}</p>
                            <p>{props.location.prod.prod.category}</p>
                            <p>{props.location.prod.prod.description}</p>
                </div>
            </div>
                {/* <div className="buy">
                {isInCart && <button className="in-cart" >Added to shopping cart</button>}
                {!isInCart && <button className="notincart" onClick={this.handleAddCart} >Add to shopping cart</button>}
                </div> */}
            </div>
        </div>
        )
    }   


export default ProductPage