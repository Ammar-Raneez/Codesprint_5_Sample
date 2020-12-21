import React from 'react'
import Card from './components/card/Card'
import './Leaderboard.css'

function Leaderboard() {
    return (
        <div className="leaderboard">
            <Card place="2" suffixFirst="ND" suffixSecond="Place" prize="20 000" />
            <Card place="1" suffixFirst="ST" suffixSecond="Place" prize="25 000" />
            <Card place="3" suffixFirst="RD" suffixSecond="Place" prize="15 000" />
        </div>
    )
}

export default Leaderboard
