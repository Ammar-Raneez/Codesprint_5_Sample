import React from 'react'
import './Card.css'

function Card({ place, suffixFirst, suffixSecond, prize }) {
    return (
        <div style={{ marginBottom : place === "1" ? "5em" : "0px" }} className="box-card">
            <div style={{ color : place === "1" ? "#ffbe40" : place === "2" ? "#a0a0a0" : "#67532d" }} className="place-text">
                <h1>{ place }</h1>
                <div className="suffix">
                    <p>{ suffixFirst }</p>
                    <p>{ suffixSecond }</p>   
                </div>  
            </div>
            <h4 className="winnings">Rs { prize }</h4>
        </div>
    )
}

export default Card
