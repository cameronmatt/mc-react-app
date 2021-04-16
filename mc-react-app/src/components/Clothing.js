import React, {useContext, useEffect, useState} from 'react'
import ProductsContext from "../Contexts/ProductContext"

export default function Clothing() {

    const Products = useContext(ProductsContext)

    useEffect(() => console.log("cloth", Products)) 

    const clothingProducts = Products.filter((product)  => {
        return product.includes("clothing")


    // useEffect(() => {
    //     const clothingProducts = Products.map(prod => prod)

    //     const filteredClothing = clothingProducts.filter((product) => {
    //         return product.includes("clothing")
            
    //     })

        // return (
        //     <div>
        //         {/* {filteredClothing} */}
        //     </div>
        //     )
        
}
// export default Clothing