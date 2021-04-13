import React from "react"
import SearchBar from "./components/SearchBar"
import ProductCard from "./components/ProductCard"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [],
    }
  }
  componentDidMount(){
    this.findProducts();
  }
 
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
