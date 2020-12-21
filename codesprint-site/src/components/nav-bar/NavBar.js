import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__sectionOne">
                <img src="./logo.png" alt="logo"/>
            </div>
            <div className="navBar__sectionTwo">
                <nav>
                    <button><a href="#">HOME</a></button>
                    <button><a href="#">ABOUT</a></button>
                    <button><a href="#">EVENTS</a></button>
                    <button><a href="#">CONTACT US</a></button>
                    <button className="navBar__login">LOG IN</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
