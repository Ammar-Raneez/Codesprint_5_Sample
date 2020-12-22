import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__sectionOne">
                <img src="./logo.png" alt="logo"/>
            </div>
            <div className="navBar__sectionTwo">
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
