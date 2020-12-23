import React from 'react'
import './LogoSpinner.css'

function LogoSpinner() {
    return (
        <div className="codeSprintImage">
            <div className="codeSprintImage__image">
                <img src="earth.png" alt=""/>
                <img src="logo.png" alt=""/>
            </div>
            {/* You can add any content you need after the code sprint title image */}
        </div>
    )
}

export default LogoSpinner
