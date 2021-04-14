import React from "react"
import SearchBar from "./components/SearchBar"
import ProductCard from "./components/ProductCard"
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
    this.findProducts();
  }
  //fetches data, converts to json and resets the state
    findProducts = () => {
      let url = 'https://fakestoreapi.com/products'
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({products: data}))
    }


  render(){
  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchBar />
      <ProductCard products={this.state.products}/>
    </div>
    )
  }
}

export default App
