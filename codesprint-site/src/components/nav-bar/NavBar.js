import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import LogoSpinner from '../logo-spinner/LogoSpinner'

function NavBar() {
    const [show, handleShow] = useState(false);

    function scrollFn() {
        window.scrollY > 350 ? handleShow(true) : handleShow(false);
    };

    // this is to make the nav bar to be dark visible when scroll in window from Y axis more than 100 pixels
	useEffect(() => {
		window.addEventListener('scroll', scrollFn);

		// removes therefore able to call again when scrolled
		return () => {
			window.removeEventListener('scroll', scrollFn);
		};
    }, [scrollFn]);
    
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className={`navBar__sectionOne ${show && 'showNavSectionOneImage'}`}>
                <img src="./earth.png" alt=""/>
                <img src="./logo_wo.png" alt=""/>
            </div>
            <div className={`navBar__sectionTwo ${show && 'navBar__sectionTwoChange'}`}>
                <nav>
                    <button><Link to="/"><a>HOME</a></Link></button>
                    <button><Link><a>ABOUT</a></Link></button>
                    <button><Link><a>EVENTS</a></Link></button>
                    <button><Link><a>CONTACT US</a></Link></button>
                    <button className="navBar__login">REGISTER</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
