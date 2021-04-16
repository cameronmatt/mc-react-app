import React from 'react'

const Electronics = ({products}) => {
    const electronicProducts = products.map(prod => prod)

    const filteredElectronic = electronicProducts.category.filter((product) => {
        return product.category.includes("electronics")
    })

    return (
    <div>
        {filteredElectronic} 
    </div>
    )
}
export default Electronics