import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import About from './components/about/About'
import Leaderboard from '../../components/leaderboard/Leaderboard'

function Hackathon() {
    return (
        <div>
            <NavBar />
            <About />
            <Leaderboard />
        </div>
    )
}

export default Hackathon
