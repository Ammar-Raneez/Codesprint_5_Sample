import React, { useEffect, useState } from 'react'
import "./NavBar.css"

function NavBar() {
    const [show, handleShow] = useState(false);

    // this is to make the nav bar to be dark visible when scroll in window from Y axis more than 100 pixels
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 400 ? handleShow(true) : handleShow(false);
		});

		// removes therefore able to call again when scrolled
		return () => {
			window.removeEventListener('scroll');
		};
    }, []);
    
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className={`navBar__sectionOne ${show && 'showNavSectionOneImage'}`}>
                <img src="./logo.png" alt="logo"/>
            </div>
            <div className={`navBar__sectionTwo ${show && 'navBar__sectionTwoChange'}`}>
                <nav>
                <button><Link to="/"><a>HOME</a></Link></button>
                    <button><Link><a>ABOUT</a></Link></button>
                    <button><Link><a>EVENTS</a></Link></button>
                    <button><Link><a>CONTACT US</a></Link></button>
                    <button className="navBar__login">LOG IN</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
