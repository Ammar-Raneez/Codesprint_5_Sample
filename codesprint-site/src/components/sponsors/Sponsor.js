import React from 'react'
import './Sponsor.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sponsor() {
    let settings = {
        dots: true,
        fade: true,
        infinite: true,
        // centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    };
    // dots: true,
    // infinite: true,
    // centerMode: true,
    // slidesToShow: 5,
    // slidesToScroll: 3,
    // speed: 500,
    // arrows: true,
    // className: 'slides'

    let sponsors = [
        {
            name: 'sponsor 1',
            url: "sponsor-images/Sponser.png"
        },
        {
            name: 'sponsor 1',
            url: "sponsor-images/Sponser.png"
        },
        {
            name: 'sponsor 1',
            url: "sponsor-images/Sponser.png"
        },
        {
            name: 'sponsor 1',
            url: "sponsor-images/Sponser.png"
        },
        {
            name: 'sponsor 1',
            url: "sponsor-images/Sponser.png"
        },
        {
            name: 'sponsor 1',
            url: "sponsor-images/Sponser.png"
        }
    ]

    return (
        <div className="sponsor">
            <h1 id="heading">SPONSORS</h1>
            <Slider {...settings}>
                {sponsors.map(photo => (
                    <div style={{ width: '100px' }}>
                        <img src={photo.url} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Sponsor
