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
        centerMode: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        slidesPerRow: 1,
        className: 'slides',
        autoplay: true,
        autoplaySpeed: 2000
    };

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
