import React from 'react'

function Leaderboard() {
    return (
        <div className="leaderboard">
            <div className="box-2">
                <div className="place-text">
                    <h1>2</h1>
                    <div className="suffix">
                    <h3>ND</h3>
                    <h3>Place</h3>   
                    </div>  
                </div>
                <h4 className="winnings">Rs 20 000</h4>
            </div>
    
            <div className="box-1">
                <div className="place-text">
                <h1>1</h1>
                <div className="suffix">
                    <h3>ST</h3>
                    <h3>Place</h3>
                </div>
                <h4 className="winnings" style="padding-top: 90px;">Rs 25 000</h4>
                </div>
            </div>
    
            <div className="box-3">
                <div className="place-text">
                    <h1>3</h1>
                    <div className="suffix">
                    <h3>RD</h3>
                    <h3>Place</h3>
                    </div>
                    <h4 className="winnings">Rs 15 000</h4>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
