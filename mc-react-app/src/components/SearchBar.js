import React, {useContext, useState} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
import SearchStyle from './css/SearchBar.module.css'
import Select from 'react-select';
import { Redirect, useHistory, Link, BrowserRouter as Router } from 'react-router-dom'

function SearchBar() {

    const history = useHistory();

    const product = useContext(ProductsContext)

    const [products, setProducts] = useState([]);

    const newProducts = product.products.map(prod => ( 
        {label: prod.title, 
        value: prod.title,
        id: prod.id,
        description: prod.description,
        price: prod.price,
        image: prod.image}
    ))

    //console.log(newProducts)

    const handleClick = (item) =>  {
        console.log("card", item); 
        history.push({
            pathname: `/product/${item.id}`,
            state: {...item}
        //setProducts(value)
        //console.log("value", products)
        })
    }


    return (
    <div className="wrapper">
        <Router>
            <Select 
            options={newProducts}
            onChange={handleClick}
            className={SearchStyle.searchbar} 
            />
        </Router>
        
        {/* <input 
            type="search" 
            className={SearchStyle.searchbar} 
            placeholder="Search" 
            value={searchValue} 
            onChange={handleInputChange} 
        /> */}
        {/* <SearchResults filteredProducts={filteredProducts} /> */}
    </div>
    )
}
export default SearchBar
