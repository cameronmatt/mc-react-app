import React, {useContext, useEffect, useState} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"

function Clothing() {

        const [data, setData] = useState("")
        const  product  = useContext(ProductsContext)
        //const currentProductCategory = route.match.params.category;
    
        useEffect(() => {
            //console.log(product)
            //const productCategory = currentProductCategory;
            const selectedProduct = product.products.filter((item) => item.category === 'men clothing');
            //console.log(selectedProduct)
            setData(selectedProduct);
        
            console.log('dates', data);
            //console.log("category", productCategory);
            //console.log("selected product:", selectedProduct);
          }, []);
          

    //console.log("prod", Products)

    // const innerArray = Object.entries(data)
    // console.log('innerarr', innerArray)

    // const productsArray = innerArray.map(prod => (
    //     <div  key={prod.id}>
    //         <div>
    //             <a>{prod.title}</a>
    //             <img src={prod.image} alt={prod.title}/>  
    //         </div>
    //     </div>
    // ))

    //const catMens = innerArray.filter(([key,value]) => value === 'clothing')
    //const catMens = innerArray.map(([key,value]) => value !== '')

    //const catMens = innerArray.filter((products) =>
    //innerArray[0][1][0].includes('clothing')
    //)


    //console.log('catmens', catMens)

    
    // const catMensObj = Object.fromEntries(catMens)

    // console.log('catmens', catMensObj)

    // let filteredClothing = Products.products.map( products => products.products)
        
    // //     {
    // //     (products.products.category === 'men clothing'
    // //     ); 
    // // })
    //  console.log('filteredClothing', filteredClothing)
    //const [clothingProducts, setclothingProducts] = useState(Products);
    
    //useEffect(() => console.log("cloth", products)) 

    // clothingProducts(() => {
    //     setclothingProducts(
    //         Products.filter((product) =>
    //         product.category.includes('clothing')
    //       )
    //     );
    //   }, []);

    // const sortByCategory = () => {  
    //     const sorted = [...clothingProducts].sort(product => {
    //         return product.category.includes("clothing")
    //     });
    //     setclothingProducts(sorted);
    //     console.log("cloves", sortByCategory)
    //   };

        return ( 
            
            <div> 
                {data.map(prod => (
                    <li>
                        {prod.title}
                    </li>
                    ))}
            </div>
        
            )
        
}

export default Clothing