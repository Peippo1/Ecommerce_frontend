import '../../App.css'
import "./Home.css"
import MainCaro from '../MainCaro'
import React from 'react';
import unionjacklargecushion from "../images/unionjacklargecushion.jpg"
import glasses from "../images/glasses.jpg"
import flipper from "../images/flipper.png"
import Featuredproducts from "../products/FeaturedProducts"
import Navbar from "../Navbar.js"
import Footer from "../Footer"
import SocialBar from '../socialsbar/Socialsbar';

function Home() {
    return (
        <div>
            <Navbar />
            <SocialBar />
            <div className="homecontainer">
                <MainCaro/>
                <SocialBar />
            <div className="newarrivals">
                <p className="newarr"> SHOP FEATURED PRODUCTS</p>
                <div className="featuredproducts">
                    <Featuredproducts featuredimage={unionjacklargecushion}/>
                    <Featuredproducts featuredimage={glasses}/>
                    <Featuredproducts featuredimage={flipper}/>
                 </div>
            </div>
            <Footer />
        </div>  
        </div>
        
    )
}

export default Home;

