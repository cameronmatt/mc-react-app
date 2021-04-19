import React, {useContext, useEffect, useState} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"

function Clothing() {

        const [data, setData] = useState("")
        const  product  = useContext(ProductsContext)
    
        useEffect(() => {
            //console.log(product)
            const selectedProduct = product.products.filter((item) => item.category === 'men clothing');
            //console.log(selectedProduct)
            setData(selectedProduct);
        
            console.log('dates', data);
            //console.log("category", productCategory);
            //console.log("selected product:", selectedProduct);
          }, []);


        return ( 
            
            <div>
                {data.map(prod => (
                    <div key={prod.id}>
                        {prod.title}
                        <img src={prod.image} alt={prod.title}/>
                    </div>
                    ))}
            </div>
        
            )
        
}

export default Clothing