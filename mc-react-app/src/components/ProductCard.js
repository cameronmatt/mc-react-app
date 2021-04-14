import React from 'react'
import ProductCardStyle from './ProductCard.module.css'

class ProductCard extends React.Component {

    // renders product images and information to the DOM
    render() {
        console.log(this.props.products)
        const productsArray = this.props.products.map(prod => (
            <div  key={prod.id}>
                <div className={ProductCardStyle.prodcontainer}>
                    <a className={ProductCardStyle.title}>{prod.title}</a>
                    <img className={ProductCardStyle.image} src={prod.image}  alt={prod.title}/>
                        <div className={ProductCardStyle.price}>
                            <p id="price"> Price: ${prod.price}</p>
                            {/* <p>{prod.category}</p>
                            <p>{prod.description}</p> */}
                        </div>
                </div>
                {/* <div className="buy">
                {isInCart && <button className="in-cart" >Added to shopping cart</button>}
                {!isInCart && <button className="notincart" onClick={this.handleAddCart} >Add to shopping cart</button>}
                </div> */}
            </div>
        ))
        return (
          <div className="card">
            {productsArray}
          </div>
        )
    }
}

export default ProductCard