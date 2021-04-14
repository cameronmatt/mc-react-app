import React from 'react'
import SearchBar from './SearchBar'
import HomeStyle from './Home.module.css'

class Home extends React.Component {

    

    render() {
        //console.log('prod',this.props.products)
        return (
            <div className="home-menu" key={"home"}>
                <div>
                    <SearchBar />
                    <img
                        className={HomeStyle.image1}
                        src="code/mc-react-app/src/components/Images/clothing.jpeg"
                        alt="Clothing"
                    />
                    <img
                        className={HomeStyle.image2}
                        src="code/mc-react-app/src/components/Images/eletronics.jpeg"
                        alt="Electronics"
                    />
                    <img
                        className={HomeStyle.image3}
                        src="code/mc-react-app/src/components/Images/jewelery.jpeg"
                        alt="Jewelery"
                    />
                </div>
            </div>
        )
    }
}

export default Home