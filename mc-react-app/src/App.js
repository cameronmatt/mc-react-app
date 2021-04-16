import React, {useContext, useState, useEffect} from "react"
//import ProductCard from "./components/ProductCard"
import Home from "./components/Home"
import Clothing from "./components/Clothing"
// import Electronics from "./components/Electronics"
// import Jewelery from "./components/Jewelery"
// import SearchBar from "./components/SearchBar"
import AppStyle from "./App.module.css"
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import ProductsContext from "./Contexts/ProductContext"


function App() {

  //sets the state
  const [products, setProducts] = useState([])

  //fetches data, converts to json and resets the state
  const fetchProducts = () => {
      let url = 'https://fakestoreapi.com/products'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //this.storeProducts(data)
          setProducts(data)
          console.log('fetch',data)
          
        })
        .catch(firstGetError => console.log(firstGetError))
    }
// Waits for components to mount then calls fetch
    useEffect(fetchProducts, [])

  //   storeProducts = (data) => {
      
  //   }

  //   let productDB = 'http://localhost:3000/products/'
  //     fetch(productDB, {
  //       method: 'POST',
  //       headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then (response => response.json())
  //     .then(data => {
  //       this.displayProducts()
  //       console.log('save',data)
  //     })
  //     .catch(postError => console.log(postError))

  //   displayProducts = () => {
  //     let productDB = 'http://localhost:3000/products/'
  //     fetch(productDB)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({products: data})
  //       console.log('display',data)
  //     })
  //     .catch(secondGetError => console.log(secondGetError))
  // }

   return ( 

      <div className={AppStyle.container}>

        <ProductsContext.Provider value={{products, setProducts}}>
        {/* <p className={AppStyle.header}>bluff</p> */}
        {/* <SearchBar products={this.state.products} className={AppStyle.searchbar}/> */}
        <Home className={AppStyle.home}/>
        
        <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} className={AppStyle.home}/>
        <Route exact path="/clothing" component={Clothing}/>
        {/* <Route exact path="/electronics" component={Electronics}/>
        <Route exact path="/jewelery" component={Jewelery}/>  */}
        {/* <Route exact path="/product/:id" render={props => ( <ProductPage { ...props } id={this.state} />  )} /> */}
        
        </BrowserRouter>
        {/* <ProductCard products={this.state.products}/> */}

        </ProductsContext.Provider>
      </div>

      
    )
  
}

export default App
