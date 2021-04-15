import React from "react"
//import ProductCard from "./components/ProductCard"
import Home from "./components/Home"
import SearchBar from "./components/SearchBar"
import AppStyle from "./App.module.css"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [],
    }
  }
  // Waits for components to mount then fetches data via api
  componentDidMount(){
    this.fetchProducts();
  }
  //fetches data, converts to json and resets the state
    fetchProducts = () => {
      let url = 'https://fakestoreapi.com/products'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //this.storeProducts(data)
          this.setState({products: data})
          console.log('fetch',data)
          
        })
        .catch(firstGetError => console.log(firstGetError))
    }

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

  render(){
    console.log("state", this.state.products)
    return (
      <div className={AppStyle.container}>
        {/* <p className={AppStyle.header}>bluff</p> */}
        <SearchBar products={this.state.products} className={AppStyle.searchbar}/>
        <Home className={AppStyle.home}/>
        {/* <ProductCard products={this.state.products}/> */}
      </div>
      )
  }
}

export default App
