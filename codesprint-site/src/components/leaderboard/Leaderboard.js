import React from 'react'
import Card from './components/card/Card'
import './Leaderboard.css'

function Leaderboard({ second, first, third }) {
    return (
        <div className="leaderboard" >
            <Card place="2" suffixFirst="ND" suffixSecond="Place" prize={second} />
            <Card place="1" suffixFirst="ST" suffixSecond="Place" prize={first} />
            <Card place="3" suffixFirst="RD" suffixSecond="Place" prize={third} />
        </div>
    )
}

export default Leaderboard
