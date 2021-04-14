import React from "react"
//import ProductCard from "./components/ProductCard"
import Home from "./components/Home"
import SearchBar from "./components/SearchBar"
import "./App.css"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [],
    }
  }
  // Waits tof compoents to mount then fetches data via api
  componentDidMount(){
    this.fetchProducts();
  }
  //fetches data, converts to json and resets the state
    fetchProducts = () => {
      let url = 'https://fakestoreapi.com/'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.storeProducts()
          console.log('fetchs',data)
        })
        .catch(firstGetError => console.log(firstGetError))
    }

    storeProducts = (data) => {
      let productDB = 'http://localhost:3000/'
      fetch(productDB, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then (response => response.json())
      .then(data => {
        this.displayProducts()
        console.log('save',data)
      })
      .catch(secondGetError => console.log(secondGetError))
    }

    displayProducts = () => {
      let productDB = 'http://localhost:3000/products'
      fetch(productDB)
      .then(response => response.json())
      .then(data => {
        this.setState({products: data})
        console.log('display',data)
      })
      .catch(thirdGetError => console.log(thirdGetError))
  }

  render(){
    return (
      <div className="App">
        <Home />
        {/* <ProductCard products={this.state.products}/> */}
        <SearchBar products={this.state.products} />
      </div>
      )
  }
}

export default App
