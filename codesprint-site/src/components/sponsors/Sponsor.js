import React from 'react'
import './Sponsor.css'
import Slider from "react-slick";


function Sponsor() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="sponsor">
            <h1 id="heading">Sponsors</h1>
            <Slider {...settings}>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
                <div>
                    <img src="images/Sponser.png" />
                </div>
            </Slider>
        </div>
    )
}

export default Sponsor
