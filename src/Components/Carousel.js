import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carousel.css";

function Carousel() {
    let setting={
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        className:"slides",
    }
    

    return (
        <div className="carousel">
            <Slider {...setting}>
                <div className="fitness">
                    <div className="site-background ">
                        <h1>FITNESS</h1>
                        <button  className="btn">Explore</button>
                    </div>
                </div>
                <div className="games">
                    <div className="site-background ">
                        <h1>GAMES</h1>
                        <button className="btn">Explore</button>
                    </div>
                </div>
                <div className="technology">
                    <div className="site-background">
                        <h1>TECH</h1>
                        <button className="btn">Explore</button>
                    </div>
                </div>
                <div className="sports">
                    <div className="site-background ">
                        <h1>SPORTS</h1>
                        <button className="btn">Explore</button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel

