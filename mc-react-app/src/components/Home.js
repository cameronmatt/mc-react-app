import React from 'react'
import HomeStyle from './css/Home.module.css'
import bluff from "./Images/bluff.png"
import clothing from "./Images/clothing.png"
import womenclothing from "./Images/womenclothing.png"
import electronics from "./Images/electronics.png"
import jewelery from "./Images/jewelery.png"
import { Link } from 'react-router-dom'


class Home extends React.Component {


    render() {
        return (

            <div className={HomeStyle.homecontainer} key={"home"}>
                <img className={HomeStyle.logo} src={bluff} alt="logo"/>

                <div className={HomeStyle.menclothing}>
                    <img href="./menclothing" className={HomeStyle.image1} src={clothing} alt="Clothing" />
                    <Link to="./menclothing" className={HomeStyle.clothingLink} >Men's Clothing</Link>
                </div>

                <div className={HomeStyle.womenclothing}>
                    <img to='./womenclothing' className={HomeStyle.image2} src={womenclothing} alt="Clothing" />
                    <Link to='./womenclothing'className={HomeStyle.womenclothingLink} >Women's Clothing</Link>
                </div>

                <div className={HomeStyle.electronics}>
                    <img to="./electronics" className={HomeStyle.image3} src={electronics} alt="Electronics" />
                    <Link to="./electronics"className={HomeStyle.electronicsLink} >Electronics</Link>
                </div>

                <div className={HomeStyle.jewelery}>
                    <img to="./jewelery" className={HomeStyle.image4} src={jewelery} alt="Jewelery" />
                    <Link to="./jewelery" className={HomeStyle.jeweleryLink} >Jewelery</Link>
                </div>
            </div>
        )
    }
}

export default Home