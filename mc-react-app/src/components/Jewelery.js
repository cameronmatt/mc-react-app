import React from 'react'

const Jewelery = ({products}) => {
    const jeweleryProducts = products.map(prod => prod)

    const filteredJewelery = jeweleryProducts.category.filter((product) => {
        return product.category.includes("jewelery")
    })

    return (
    <div>
        {jeweleryProducts} 
    </div>
    )
}
export default Jewelery