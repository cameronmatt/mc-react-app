import React, {useEffect, useContext} from 'react'
import ProductPageStyle from './css/ProductPage.module.css'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Nav from "./Nav"
import { useLocation } from "react-router-dom";

function ProductPage(props) {

    const location = useLocation();

    useEffect(() => {
        console.log('pathname', location.pathname); // result: '/secondpage'
        console.log('state', location.prod); // result: 'some_value'
        console.log("props", props)
     }, [location]);

        // renders product images and information to the DOM
        return (
        <div className={ProductPageStyle.container} key={"545"}>
            <Logo />
            <SearchBar />
            <Nav />
            <div >
                <div className={ProductPageStyle.prodcontainer}>
                    <p className={ProductPageStyle.title}>{props.location.state.title}</p>
                    <img className={ProductPageStyle.image} src={props.location.state.image} alt={props.location.state.title}/>
                        <div >
                            <p className={ProductPageStyle.price}> Price: ${props.location.state.price}</p>
                            <button className={ProductPageStyle.addCart}> Add to Shopping Cart </button>
                            <p className={ProductPageStyle.description}>{props.location.state.description}</p>
                        </div>
                </div>
                {/* {
                    isInCart(props) && 
                    <button 
                    onClick={() => increase(props)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(props) && 
                    <button 
                    onClick={() => addProduct(props)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                } */}
            </div>
        </div>
        )
    }   


export default ProductPage