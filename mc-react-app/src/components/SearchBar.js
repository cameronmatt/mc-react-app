// import React, {useState} from 'react'
// import SearchResults from './SearchResults'
// import SearchStyle from './SearchBar.module.css'

// const SearchBar = ({products}) => {
//     const newProducts = products.map(prod => prod.title)

//     const [searchValue, setSearchValue] = useState("")

//     const handleInputChange = (event) => {
//         setSearchValue(event.target.value)
//     }

//     const filteredProducts = newProducts.filter((product) => {
//         return product.includes(searchValue)
//     })

//     return (
//     <div className="wrapper">
//         <input 
//             type="search" 
//             className={SearchStyle.searchbar} 
//             placeholder="Search" 
//             value={searchValue} 
//             onChange={handleInputChange} 
//         />
//         <SearchResults filteredProducts={filteredProducts} />
//     </div>
//     )
// }
// export default SearchBar
