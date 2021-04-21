import React from 'react'
import { Link } from 'react-router-dom'
import NavList from './css/navlist.module.css'


class Nav extends React.Component {

    render() {
        //console.log('prod',this.props.products)
        return (
            <div>
                <ul className={NavList.list}>
                <li><Link to='/' className={NavList.listItem}>Home</Link></li>
                <li><Link to='/menswear' className={NavList.listItem}>Menswear</Link></li>
                <li><Link to='/womenswear' className={NavList.listItem}>Womenswear</Link></li>
                <li><Link to='/electronics' className={NavList.listItem}>Electronics</Link></li>
                <li><Link to='/jewelery' className={NavList.listItem}>Jewelery</Link></li>
                </ul>
            </div>

        )
    }
}

export default Nav