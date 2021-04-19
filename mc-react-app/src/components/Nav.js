import React from 'react'
import { Link } from 'react-router-dom'


class Nav extends React.Component {

    render() {
        //console.log('prod',this.props.products)
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/menclothing'>Men's Clothing</Link>
                <Link to='/womenclothing'>Women's Clothing</Link>
                <Link to='/electronics'>Electronics</Link>
                <Link to='/jewelery'>Jewelery</Link>
            </div>

        )
    }
}

export default Nav