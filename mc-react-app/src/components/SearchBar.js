import React, {useContext, useState} from 'react'
import {ProductsContext} from "../Contexts/ProductContext"
//import SearchResults from './SearchResults'
import SearchStyle from './SearchBar.module.css'
import Select from 'react-select';
import { Redirect, Link, BrowserRouter as Router } from 'react-router-dom'

function SearchBar() {

    const product = useContext(ProductsContext)

    const [products, setProducts] = useState([]);

    const newProducts = product.products.map(prod => ( 
        <Link to={{ 
            pathname: `product/${prod.id}`, prod: {prod}
            }} > 
            {prod.title}
        {/* {label: prod.title, 
        value: prod.title,
        id: prod.id,
        description: prod.description,
        price: prod.price,
        image: prod.image} */}
        </Link> 
    ))

    //console.log(newProducts)

    const handleClick = (item) =>  {
        console.log("card", item); 
        return (
        <Router>
            <Redirect to={{ pathname: `product/${item.id}`, prod: {item}}} />
        </Router>)
        //setProducts(value)
        //console.log("value", products)
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
