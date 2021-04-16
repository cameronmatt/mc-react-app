import React from 'react'
import HomeStyle from './Home.module.css'
import clothing from "./Images/clothing.png"
import electronics from "./Images/electronics.png"
import jewelery from "./Images/jewelery.png"


class Home extends React.Component {

    constructor() {
        super()
    
        this.state = {
          products: []
        }
      }

    render() {
        //console.log('prod',this.props.products)
        return (

            <div className="home-menu" key={"home"}>
                <div>
                    <img
                        className={HomeStyle.image1}
                        src={clothing}
                        alt="Clothing"
                    />
                    <p className={HomeStyle.cat1} >Clothing</p>
                    <img
                        className={HomeStyle.image2}
                        src={electronics}
                        alt="Electronics"
                    />
                    <p className={HomeStyle.cat2}>Electronics</p>
                    <img
                        className={HomeStyle.image3}
                        src={jewelery}
                        alt="Jewelery"
                    />
                    <p className={HomeStyle.cat3}>Jewelery</p>
                </div>
            </div>
        )
    }
}

export default Home