import React from 'react'

class ProductCard extends React.Component {



    render() {
        console.log(this.props.products)
        const productsArray = this.products.map(prod => (
            <div>
                <div  key={prod.id}>
                    <a className="title">
                            {prod.title}
                    </a>
                    <img className="image">{prod.image}</img>
                        <div className="description">
                            <p>Price: {prod.price}</p>
                            <p>{prod.category}</p>
                            <p>{prod.description}</p>
                        </div>
                </div>

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