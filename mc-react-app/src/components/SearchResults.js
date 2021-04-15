import React from 'react'

class SearchResults extends React.Component {

    
    render() {
        //console.log('prod',this.props.products)
        const searchResult = this.props.filteredProducts.map((product) => {
                return <li key={product}>{product}</li>
            })
        
        return (
          <div className="search-results">
            {searchResult}
          </div>
        )
    }
}

export default SearchResults